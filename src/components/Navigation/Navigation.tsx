import { FC, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
import { ERoutes } from "../../enums";
import { CustomToaster } from "../Global/Toaster/CustomToaster";
import { TOAST_MESSAGES } from "../constants";
import { setLoading, signOutUser } from "../redux/auth/auth-slice";
import { useAppDispatch } from "../redux/store";
import { selectUser } from "../redux/auth/auth-selectors";
import { Loader } from "../Loader/Loader";
import { useGoogleAuth } from "../hooks/useGoogleAuth";
import { selectIsLoading } from "../redux/teachers/teachers-selectors";

const { SIGN_OUT_SUCCESS } = TOAST_MESSAGES;

export const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState<TNavProps>({
    signIn: false,
    signUp: false,
  });

  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const { isUserRefresh, isUserLoggedIn } = useAuthUser();
  const { signOutWithGoogle } = useGoogleAuth();
  const dispatch = useAppDispatch();

  const handleToggle = (key: "signIn" | "signUp") => {
    setIsOpen(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleLoginClose = () => {
    handleToggle("signIn");
  };

  const handleRegisterClose = () => {
    handleToggle("signUp");
  };

  const handleSignOut = async () => {
    try {
      setLoading(true);
      await signOutWithGoogle();
      dispatch(signOutUser());
      setLoading(false);

      toast.success(SIGN_OUT_SUCCESS);
      navigate(ERoutes.Root);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const showUser = isUserLoggedIn && !isUserRefresh && !isLoading;

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
        {showUser && (
          <LinkWapper>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </LinkWapper>
        )}
      </li>
      <ListBtnAuth>
        {showUser && (
          <>
            <li>
              <Topic>Welcome {user?.displayName}</Topic>
            </li>
            <li>
              <Btn onClick={handleSignOut}>Logout</Btn>
            </li>
          </>
        )}

        {isLoading && <Loader width={40} height={40} />}

        {!isUserLoggedIn && (
          <ListBtnAuth>
            <li>
              <BtnSignin onClick={handleLoginClose}>
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
              <Btn type="button" onClick={handleRegisterClose}>
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
            <SignInPage onLoginClose={handleLoginClose} />
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
              <SignUpPage onRegisterClose={handleRegisterClose} />
            </Modal>
          </div>
        )}
      </ListBtnAuth>
      <CustomToaster />
    </HeaderWrapper>
  );
};
