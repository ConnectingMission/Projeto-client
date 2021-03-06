import React from 'react';
import "./styles.css";
import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router';

import CircularProgress from '@mui/material/CircularProgress';


import { loginCall } from "../../apiCalls";
import { AuthContext } from '../../context/AuthContext';

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const handleClick = (e) => {
      e.preventDefault();
      loginCall({ 
        email:email.current.value, password:password.current.value }, 
        dispatch
      );
  };

  console.log(user);

  return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                  <h3 className="loginLogo">Lamasocial</h3>
                  <span className="loginDesc">
                      Connect with friends and the world around you on Lamasocial.
                  </span>
              </div>
              <div className="loginRight">
                  <form className="loginBox">
                      <input 
                        placeholder="Email" 
                        type="email"
                        required 
                        className="loginInput" 
                        ref={email}
                      />
                      <input 
                        placeholder="Password" 
                        type="password"
                        required
                        minLength="6"
                        className="loginInput" 
                        ref={password}
                      />
                      <button className="loginButton" type="submit" disabled={isFetching}  onClick={handleClick}>
                        {isFetching ? <CircularProgress size="25px" style={{'color':'white'}}/>: "Log In"}
                      </button>
                      <span className="loginForgot">Forgot Password?</span>
                      <button className="loginRegisterButton" onClick={() => navigate('/register')}>
                      {isFetching ? <CircularProgress size="25px" style={{'color':'white'}}/>: "Create Account"}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default Login;