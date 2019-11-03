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

  update(p) {
    return e => this.setState({
      [p]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div>Please {this.props.formType} or {this.props.navLink} </div>
          <br />
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <br />
          <label>
            Password:
              <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <input className="session-submit" type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default SessionForm;