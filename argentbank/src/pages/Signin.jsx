// React
import React from 'react';

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCircleUser} />*/

function Signin() {
  return (
    <main className="main bg-dark">
        <section className="sign-in-content">

            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <label for="remember-me">Remember me</label>
                    <input type="checkbox" id="remember-me" />
                </div>
                <button className="sign-in-button">Sign In</button>
            </form>
        </section>
    </main>
  );
}

export default Signin;