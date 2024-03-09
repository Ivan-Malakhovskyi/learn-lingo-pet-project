import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { ERoutes } from "../../enums";
import { FC } from "react";

export const SignOut: FC = () => {
  const navigate = useNavigate();

  const handleSignout = async () => {
    await signOut(auth);
    navigate(ERoutes.Root);
  };

  return (
    <>
      <div>SignOut</div>
      <button type="submit" onClick={handleSignout}>
        SignOut
      </button>
    </>
  );
};
