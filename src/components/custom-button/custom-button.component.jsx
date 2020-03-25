import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  handleClick,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-blue ' : ''
      } button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
