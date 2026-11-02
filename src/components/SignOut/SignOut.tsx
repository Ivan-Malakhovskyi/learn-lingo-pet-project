import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "src/firebaseConfig";
import { ERoutes } from "src/enums";

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
