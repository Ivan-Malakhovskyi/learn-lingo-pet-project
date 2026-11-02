import {
  getAdditionalUserInfo,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const useGoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);

      const result = await getRedirectResult(auth);

      if (result) {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;

        if (token) {
          return getAdditionalUserInfo(result);
        }
      }
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const signOutWithGoogle = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    signinWithGoogle,
    signOutWithGoogle,
    provider,
    auth,
  };
};
