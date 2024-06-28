import { 
  auth,
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils.js';

import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';

const SignIn = () => {
  useEffect( () => {
    const fetchRedirectData = async () => {
      const response = await getRedirectResult(auth);
      
      if (response) {
        const userDocRef = createUserDocumentFromAuth(response.user);
      }
    };

    fetchRedirectData();
  }, []);


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div className="main-content">
      <div className='sign-in-container'>
        <h1>Sign In Page</h1>
        <button onMouseDown={logGoogleUser}>
          Log in with Google Popup
        </button>
        <button onMouseDown={signInWithGoogleRedirect}>
          Log in with Google Redirect
        </button>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignIn;