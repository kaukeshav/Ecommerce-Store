import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import { SignIn, SignUp } from '../../components';

const SignInAndSignUp = () => {
  return (
    <div className="signin-signup">
      <div className="sign-in-form">
        <SignIn />
      </div>
      <div className="sign-up-form">
        <SignUp />
      </div>
    </div>
  );
};

export default SignInAndSignUp;
