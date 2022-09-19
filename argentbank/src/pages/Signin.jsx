// React
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { checkSignin, loginSuccess } from '../redux/actions/actions';

// Components
import Loader from '../components/Loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { getToken } from '../utils/dataFetcher';
import { LOGIN_SUCCESS } from '../redux/actions/type';

const element = <FontAwesomeIcon icon={faCircleUser} />

function Signin() {

    const store = useSelector((state) => state);
    // TOOLS
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
    //STATE
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
 

    const handleSignIn = (e) => {
       e.preventDefault();
       getToken(email, password).then(data => {
        dispatch(loginSuccess(data))
        console.log(data)
       });
    };
 
    useEffect(() => {
       if (store.currentState === 'logged') {
          navigate('/user');
       }
    });
    if (store.loader) return <Loader />;

  return (
    <HelmetProvider>
        <Helmet>
        <title>Argent Bank - Sign In</title>
        </Helmet>
        <main className="main bg-dark">
            
            <section className="sign-in-content">

                <div>{element}</div>
                <h1>Sign In</h1>

                {store.error && (
                    <span className="err-mes">Something wrong here</span>
                )}

                <form onSubmit={(e) => handleSignIn(e)}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <label htmlFor="remember-me">Remember me</label>
                        <input
                            type="checkbox"
                            id="remember-me"
                            onChange={(e) => setRemember(!remember)}
                        />
                    </div>
                    <button className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    </HelmetProvider>
  );
}

export default Signin;