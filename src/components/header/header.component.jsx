import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase';
import { ReactComponent as Logo } from '../../images/crown.svg';
import './header.styles.scss';
import { CartIcon, CartDropdown } from '../index';

const Header = ({ currentUser, hidden }) => {
  return (
    <header className='global-header'>
      <Link to='/' className='global-header__brand-container'>
        <Logo></Logo>
      </Link>
      <nav className='global-header__nav'>
        <Link to='/shop' className='global-header__nav-item'>
          SHOP
        </Link>
        <Link to='/about' className='global-header__nav-item'>
          ABOUT
        </Link>
        {currentUser ? (
          <div
            className='global-header__nav-item'
            onClick={e => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to='/sign-in'>SIGN IN</Link>
        )}
        <CartIcon></CartIcon>
      </nav>
      <CartDropdown hidden={hidden} />
    </header>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart }) => ({
  currentUser: currentUser,
  hidden: cart.hidden
});

export default connect(mapStateToProps)(Header);
