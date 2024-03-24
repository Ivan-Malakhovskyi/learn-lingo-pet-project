import { FC, useState } from "react";
import toast from "react-hot-toast";

import logo from "/icons/ukraine_blue_yellow.svg";
import iconLogin from "/icons/log-in-01.svg";

import { Modal } from "../Global/Modal/Modal";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";
import { useAuthUser } from "../hooks/useAuthUser";
import {
  IconWrapper,
  LogoLink,
  StyledNavLink,
  Btn,
  ListBtnAuth,
  BtnSignin,
  LinkWapper,
  HeaderWrapper,
  Topic,
} from "../Navigation/Navigation.styled";
import { HomeLink } from "../Navigation/Navigation.styled";
import { TNavProps } from "./Navigation.types";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ERoutes } from "../../enums";
import { CustomToaster } from "../Global/Toaster/CustomToaster";
import { TOAST_MESSAGES } from "../constants";
import { signOutUser } from "../redux/auth/auth-slice";
import { auth } from "src/firebaseConfig";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/auth-selectors";

export const Navigation: FC = () => {
  const { SIGN_OUT_SUCCESS } = TOAST_MESSAGES;

  const [isOpen, setIsOpen] = useState<TNavProps>({
    signIn: false,
    signUp: false,
  });

  const { isUserLoggedIn } = useAuthUser();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleToggle = (key: "signIn" | "signUp") => {
    setIsOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleSuccessLogin = () => {
    handleToggle("signIn");
  };

  const handleSuccessRegister = () => {
    handleToggle("signUp");
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(signOutUser());

      toast.success(SIGN_OUT_SUCCESS);
      navigate(ERoutes.Root);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <HeaderWrapper>
      <li>
        <LogoLink to="/">
          {" "}
          <IconWrapper>
            <img src={logo} width={28} height={28} alt="logo_ukraine" />{" "}
          </IconWrapper>
          Learn Lingo
        </LogoLink>
      </li>
      <li>
        <HomeLink>
          <StyledNavLink to="/" aria-current="page">
            Home
          </StyledNavLink>
        </HomeLink>
      </li>
      <li>
        {" "}
        <StyledNavLink to="/teachers">Teachers</StyledNavLink>
        {isUserLoggedIn && (
          <LinkWapper>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </LinkWapper>
        )}
      </li>
      <ListBtnAuth>
        {isUserLoggedIn ? (
          <>
            <li>
              <Topic>Welcome {user && user.name}</Topic>
            </li>
            <li>
              <Btn onClick={handleSignOut}>Logout</Btn>
            </li>
          </>
        ) : (
          <ListBtnAuth>
            <li>
              <BtnSignin onClick={() => handleToggle("signIn")}>
                <IconWrapper>
                  <img
                    src={iconLogin}
                    width={20}
                    height={20}
                    alt="icon_login"
                  />{" "}
                </IconWrapper>
                Log in
              </BtnSignin>
            </li>
            <li>
              {" "}
              <Btn type="button" onClick={() => handleToggle("signUp")}>
                Registration
              </Btn>
            </li>
          </ListBtnAuth>
        )}

        {isOpen.signIn && (
          <Modal
            maxwidth={566}
            maxheight={506}
            close={() => handleToggle("signIn")}
          >
            <SignInPage onLoginSuccess={handleSuccessLogin} />
          </Modal>
        )}

        {isOpen.signUp && (
          <div>
            {" "}
            <Modal
              maxwidth={566}
              maxheight={600}
              close={() => handleToggle("signUp")}
            >
              <SignUpPage onRegisterSuccess={handleSuccessRegister} />
            </Modal>
          </div>
        )}
      </ListBtnAuth>
      <CustomToaster />
    </HeaderWrapper>
  );
};
