// React
import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import logo from "../assets/argentBankLogo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCircleUser} />

function Header() {
  return (
    <nav className="main-nav">
      <Link to="/">
        <div className="main-nav-logo">
            <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </div>
      </Link>
      <Link to="/signin" className='no-underline'>
        <div className="main-nav-item">
          <div>{element}</div>
          <p>Sign In</p>
        </div>
      </Link>
    </nav>
  );
}

export default Header;