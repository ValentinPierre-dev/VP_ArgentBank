// React
import React from 'react';
import { getToken } from '../utils/dataFetcher.js'

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCircleUser} />*/

function Signin() {

    getToken("tony@stark.com", "password123").then(res => {
        console.log(res)
    }) 

  return (
    <main className="main bg-dark">
        
        <section className="sign-in-content">

            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <label htmlFor="remember-me">Remember me</label>
                    <input type="checkbox" id="remember-me" />
                </div>
                <button className="sign-in-button">Sign In</button>
            </form>
        </section>
    </main>
  );
}

export default Signin;