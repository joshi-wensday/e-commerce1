import { signInWithGooglePopup, createUserDocumentFromAuth  } from '../../utils/firebase/firebase.utils.js'


const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div className="main-content">
      <h1>Sign In Page</h1>
      <button onMouseDown={logGoogleUser}>
        Log in with Google
      </button>
    </div>
  );
};

export default SignIn;