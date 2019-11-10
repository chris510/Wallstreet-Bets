import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.update = this.update.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.ui) {
      this.handleDemo();
    }
  }
  
  componentDidUpdate() {
    if (this.props.ui) {
      this.handleDemo();
    }
  }

  handleDemo() {
    this.props.removeDemoState({ demoUser: false });
    const demo = { username: 'Demo_User', password: 'password123' };
    const username = demo.username;
    const password = demo.password;
    this.loginDemo(username, password);
  }

  loginDemo(username, password) {
    const user = username.split("");
    const pass = password.split("");

    const inputDemo = (user) => {
      if (user.length > 0) {
        this.setState({
          username: this.state.username + user.shift()
        },
          () => setTimeout(() => { inputDemo(user) }, 100)
        )
      } else {
        inputDemoPass(pass);
      }
    }

    const inputDemoPass = (pass) => {
      if (pass.length > 0) {
        this.setState({
          password: this.state.password + pass.shift()
        },
          () => setTimeout(() => { inputDemoPass(pass) }, 100)
        )
      } else {
        const demoUser = this.state
        // if (this.props.processForm(demoUser)) {
        //   window.location.hash = "/home";
        // };
        this.props.processForm(demoUser);
        // window.location.hash = "/home";
      }
    }
    inputDemo(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div className="login-form">
        <div className="login-main-1">
        </div>
        <div className="login-main-2">
          <div className="login-form-container">
            <div className="login-section-1">
              <div className="login-text-1">
                <h1>Welcome to Robinhood</h1>
              </div>
            </div>
            <div className="login-section-2">
              <form onSubmit={this.handleSubmit} className="login-form-box">
                <div className="login-username-container">
                  <label className="login-text-3"> <span>Username</span>
                    <input
                      className="login-username"
                      type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                      required
                    />
                  </label>
                </div>
                <div className="login-password-container">
                  <label className="login-text-4"> <span>Password</span>
                    <input 
                    className="login-password"
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    required
                    />
                  </label>
                </div>
                <ul className="sessionform-errors">
                  {this.renderErrors()}
                </ul>
                <div className="submit-container">
                  <input className="login-submit" type="submit" value={this.props.formType} />
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
}

export default LoginForm;