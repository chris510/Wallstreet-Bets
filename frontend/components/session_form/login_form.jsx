import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const LoginForm = (props) => {
  let usernameCounter = 0;
  let passwordCounter = 0;
  let usernameField = '';
  let passwordField = '';
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  useEffect(() => {
    if (props.ui) handleDemo();
  })
  
  const handleDemo = () => {
    props.removeDemoState({ demoUser: false });
    const demo = { username: 'Demo_User', password: 'password123' };
    const username = demo.username;
    const password = demo.password;
    loginDemo(username, password);
  }

  const loginDemo = () => {
    const user = 'Demo_User';
    const pass = 'password123';
    let typeSpeed = 90;

    if (usernameCounter < user.length) {
      usernameField = usernameField + user.charAt(usernameCounter);
      setUsername(usernameField);
      usernameCounter++;
      setTimeout(loginDemo, typeSpeed);
    } else if (passwordCounter < pass.length) {
      passwordField = passwordField + pass.charAt(passwordCounter);
      setPassword(passwordField);
      passwordCounter++;
      setTimeout(loginDemo, typeSpeed);
    } else {
      const demoUser = {username: user, password: pass}
      props.processForm(demoUser);
      setUsername("");
      setPassword("");
      usernameField = "";
      passwordField = "";
      usernameCounter = 0;;
      passwordCounter = 0;;
    }
  }

  const renderErrors = () => {
    return (
      <ul>
        {props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  const update = (field) => {
    return e => {
      if (field === 'username') {
        setUsername(e.currentTarget.value);
      } else {
        setPassword(e.currentTarget.value);
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, {username: username, password: password});
    props.processForm(user);
  }

  return (
    <div className="login-form">
      <div className="login-main-1">
      </div>
      <div className="login-main-2">
        <div className="login-form-container">
          <div className="login-section-1">
            <div className="login-text-1">
              <h1>Welcome to Wallstreet Bets</h1>
            </div>
          </div>
          <div className="login-section-2">
            <form onSubmit={handleSubmit} className="login-form-box">
              <div className="login-username-container">
                <label className="login-text-3"> <span>Username</span>
                  <input
                    className="login-username"
                    type="text"
                    value={username}
                    onChange={update('username')}
                    required
                  />
                </label>
              </div>
              <div className="login-password-container">
                <label className="login-text-4"> <span>Password</span>
                  <input 
                  className="login-password"
                  type="password"
                  value={password}
                  onChange={update('password')}
                  required
                  />
                </label>
              </div>
              <ul className="sessionform-errors">
                {renderErrors()}
              </ul>
              <div className="submit-container">
                <input className="login-submit" type="submit" value={props.formType} />
              </div>
              <div className="login-form-link-container">
                <div className="login-text-5">
                Don't have an account?  
                </div>
                <div className="login-text-6">
                  <Link to="/signup" className="signup-form-link-1">Sign Up Here</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;