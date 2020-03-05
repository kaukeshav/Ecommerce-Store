import React, { Component } from 'react';
import './sign-in.styles.scss';

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

  handleSubmit = e => {
    this.setState({
      email: '',
      password: ''
    });
    e.preventDefault();
    console.log('e', e);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>Form Heading</h2>
        <p>Form caption stuff goes here...</p>
        <form className="sign-in__form" onSubmit={this.handleSubmit}>
          <label htmlFor="sign-in-email">Email</label>
          <input
            type="text"
            name="email"
            id="sign-in-email"
            onChange={this.handleChange}
            value={email}
          />

          <label htmlFor="sign-in-password">Password</label>
          <input
            type="password"
            id="sign-in-password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SingIn;
