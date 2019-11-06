import React from 'react';
import { Link } from 'react-router-dom'

class SignUpForm extends React.Component {
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
      <div className="signup-form">
        <div className="signup-form-container">
          <div className="signup-section-1">
            <div className="signup-text-1">
              <h1>Welcome to Robinhood</h1>
            </div>
            <div className="signup-text-2">
              <h1>Make Your Money Move</h1>
              <h2>Robinhood lets you invest in companies you love commission-free.</h2>
            </div>
          </div>
          <div className="signup-section-2">
            <form onSubmit={this.handleSubmit} className="signup-form-box">
              <div className="full-name-container">
                <div className="first-name-container">
                  <input type="text" className="first-name" placeholder="First Name" required/> 
                </div>
                <div className="last-name-container">
                  <input type="text" className="last-name" placeholder="Last Name" required/>
                </div>
              </div>
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
                <input className="signup-submit" type="submit" value={this.props.formType} />
              </div>
              <div className="signup-form-link-container">
                <div>
                Already have an account?     
                </div>
                <div>
                  <Link to="/login" className="signup-form-link-1">Log In to access your account</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpForm;