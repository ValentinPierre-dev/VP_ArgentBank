
// React
import React from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Assets
import logo from '../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCircleUser} />

function Header() {

  const store = useSelector((state) => state);
  const user = store.user;
  //TOOLS
  const dispatch = useDispatch();

  /**
   * If user exist : Fullname otherwise SignIn
   * @param { object } user form store
   * @param { string } firstName
   * @param { string } lastName
   */
  const title =
     user !== null ? user.firstName + ' ' + user.lastName : 'SignIn';

     console.log(user)

  /**
   * @function handleSignOut
   * Logout the user then clear the localStorage
   */
  const handleSignOut = () => {
     dispatch({ type: 'LOGOUT_ACTION' });
  };

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
      <div>
        <Link to={store.loggedIn ? '/user' : '/signin'} className='no-underline'>
          <div className="main-nav-item">
            <div>{element}</div>
            <p>{title}</p>
          </div>
        </Link>
        {store.loggedIn && (
          <Link
            className="main-nav-item"
            to="/"
            onClick={() => handleSignOut()}
          >
            <i className="fa fa-sign-out"></i>
            &nbsp;Sign Out
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;