
// React
import React from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Assets
import logo from '../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

const userIcon = <FontAwesomeIcon icon={faCircleUser} />
const logOut = <FontAwesomeIcon icon={faSignOut} />

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
     user !== null ? user.firstName + ' ' + user.lastName : 'Sign in';

   /**
    * @function handleSignOut
    * Logout the user then clear the localStorage
    */

  const handleLogOut = () => {
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
      <div className="main-nav-items">
        <Link to={store.loggedIn ? '/user' : '/signin'} className='no-underline'>
          <div className="main-nav-item">
            <div>{userIcon}</div>
            <p>{title}</p>
          </div>
        </Link>
        {store.loggedIn &&  user !== null ? (
          <Link
            className='no-underline logout'
            to="/"
            onClick={() => handleLogOut()}
          >
            <div className="main-nav-item">
              <div>{logOut}</div>
              <p>Logout</p>
            </div>
          </Link>
        ) : (<div></div>)}
      </div>
    </nav>
  );
}

export default Header;