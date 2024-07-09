import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth  } from '../../utils/firebase/firebase.utils.js';
import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';

import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // no default behavior of form -> we will handle, just tell us when submitted

        //confirm password and confirmPassword match, if true: createAuthUserWithEmailAndPassword, then create a user document
        if (password!== confirmPassword) {
            alert("Passwords do not match");
            return;
        };

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            if (user) {
                await createUserDocumentFromAuth(user, { displayName });
                alert("Account created successfully");
                resetFormFields();
            } else {
                throw new Error('User creation failed');
            }
        } catch (error) {
            if (error.code==='auth/email-already-in-use') {
                alert("Email already in use");
            } else {
                console.log("User creation encountered an error", error);
                alert("An error occurred during sign up. Please try again.");
            }
        };
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password ya smuck</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="What do you want to be called?" 
                    type="text" 
                    required 
                    name="displayName" 
                    value={displayName} 
                    onChange={handleInputChange} 
                />

                <FormInput
                    label="Email" 
                    type="email" 
                    required 
                    name="email" 
                    value={email} 
                    onChange={handleInputChange}
                />

                <FormInput
                    label="Password" 
                    type="password" 
                    required 
                    name="password" 
                    value={password} 
                    onChange={handleInputChange}
                />

                <FormInput
                    label="Confirm Password" 
                    type="password" 
                    required 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleInputChange}
                />

                {/* <button type="submit">Sign up</button> */}
                <Button buttonType="default" type="submit">
                    Sign up!
                </Button>
            </form>
        </div>
    );
}

export default SignUpForm;