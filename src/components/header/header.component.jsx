import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/crown.svg';
import './header.styles.scss';

const Header = () => {
  return (
    <header className="global-header">
      <Link to="/" className="global-header__brand-container">
        <Logo></Logo>
      </Link>
      <nav className="global-header__nav">
        <Link to="/shop" className="global-header__nav-item">
          SHOP
        </Link>
        <Link to="/about" className="global-header__nav-item">
          ABOUT
        </Link>
      </nav>
    </header>
  );
};

export default Header;
