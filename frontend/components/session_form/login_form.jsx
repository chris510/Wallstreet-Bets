import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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
        <div className="login-form-container">
          <div className="login-section-1">
            <div className="login-text-1">
              <h1>Welcome to Robinhood</h1>
            </div>
            <div className="login-text-2">
              <h1>Make Your Money Move</h1>
              <h2>Robinhood lets you invest in companies you love commission-free.</h2>
            </div>
          </div>
          <div className="login-section-2">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="username-container">
                <input
                  className="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                  required
                />
              </div>
              <div className="password-container">
                <input 
                className="password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password [min. 6 characters]"
                required
                />
              </div>
              <div className="submit-container">
                <input className="login-submit" type="submit" value={this.props.formType} />
              </div>
              <div className="login-form-link-container">
                <div>
                Don't have an account?  
                </div>
                <div>
                  <Link to="/signup" className="signup-form-link-1">Sign Up Here</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;