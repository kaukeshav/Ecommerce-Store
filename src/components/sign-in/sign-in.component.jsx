import React, { Component } from 'react';
import './sign-in.styles.scss';
import { FormInput, CustomButton } from '../index';
import { auth, signInWithGoogle } from '../../firebase';

class SingIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log('ERROR MSG!!' + err);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>Form Heading</h2>
        <p>Form caption stuff goes here...</p>
        <form className="sign-in__form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="text"
            name="email"
            id="sign-in-email"
            handleChange={this.handleChange}
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            id="sign-in-password"
            name="password"
            handleChange={this.handleChange}
            value={password}
          />

          <div className="sign-in__buttons">
            <CustomButton type="submit">Signin</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SingIn;
