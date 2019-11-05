import React from 'react';

class SessionForm extends React.Component {
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
      <div className="session-form">
        <div className="session-form-container">
          <div className="signup-section-1">
            <div className="session-text-1">
              <h1>Welcome to Robinhood</h1>
            </div>
            <div className="session-text-2">
              <h1>Make Your Money Move</h1>
              <h2>Robinhood lets you invest in companies you love, commission-free.</h2>
            </div>
          </div>
          <div className="signup-section-2">
            <form onSubmit={this.handleSubmit} className="session-form-box">
              <div className="full-name-container">
                <div className="first-name">
                  <input type="text" placeholder="First Name" required/> 
                </div>
                <div className="last-name">
                  <input type="text" placeholder="Last Name" required/>
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
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SessionForm;