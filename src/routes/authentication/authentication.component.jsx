import SignInForm from '../../components/sign-in-form/sign-in-form.component.jsx';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';

import './authentication.styles.scss';

const Authentication = () => {
  
  return (
    <div className="authentication-container">
      <h1>Sign In Page</h1>
      <div className="main-content sign-in-page-container">
        <div className="sign-in-options-container">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Authentication;