import { 
    auth,
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
    signInWithGoogleRedirect,
    signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils.js';

import { useState, useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';

import Button from '../button/button.component.jsx';
import FormInput from '../form-input/form-input.component.jsx';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    // On page load effect -> fetch googleRedirectLogInData
    useEffect( () => {
        const fetchRedirectData = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = createUserDocumentFromAuth(response.user);
            }
        };

        fetchRedirectData();
    }, []);

    // function to check/create a user document based on google Pop Up sign in.
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            alert("Sign-in successful");
            resetFormFields();
        } catch (error) {
            switch(error.code) {
                case 'auth/invalid-credential':
                    alert('Email and Password do not match');
                    break;
                default:
                    alert(error.message);
            }
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>Regular here 😎</h2>
            <span>Sign in with email or google</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label="Email" 
                    type="email" 
                    required 
                    name="email"
                    value={email}
                    onChange={handleInputChange} />
                <FormInput 
                    label="Password" 
                    type="password" 
                    required
                    name="password"
                    value={password}
                    onChange={handleInputChange} />
                    <div className="buttons-container">
                        <Button buttonType="default" type="submit">
                            Sign in!
                        </Button>
                        <div className='buttons-container-google'>
                            <Button type="button" buttonType="google" onMouseDown={signInWithGoogle} extraStyles="smol">
                            Google Popup
                            </Button>
                            <Button type="button" buttonType="google" onMouseDown={signInWithGoogleRedirect} extraStyles="smol">
                                Google Redirect
                            </Button>
                        </div>
                    </div>
            </form>

        </div>
    );
};

export default SignIn;