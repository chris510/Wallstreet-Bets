import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
      // Demo: false,
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);

    this.handleDemo = this.handleDemo.bind(this);
    // this.handlePageChange = this.handlePageChange.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    // this.handlePageChange();
    const Demo = { username: 'chris123', password: 'hello123' };

    const username = Demo.username;
    const password = Demo.password;
    // this.setState({
    //   username: "", password: ""
    // }, () => this.loginDemo(username, password));
    // setTimeout(this.loginDemo(username, password), 10000)
    this.loginDemo(username, password);
    // this.props.processForm(Demo);
  }

  componentDidMount() {
    // debugger
    // if (this.state.Demo) {
    //   this.loginDemo({ username: 'chris123', password: 'hello123' });
    // }
    debugger
    // const state = this.props.history.location.state;
    if (this.props.ui) {
      const Demo = { username: 'chris123', password: 'hello123' };
      const username = Demo.username;
      const password = Demo.password;
      this.loginDemo(username, password);
    }
  }

  componentDidUpdate() {
    // debugger
    // const state = this.props.history.location.state
    if (this.props.ui) {

      const Demo = { username: 'chris123', password: 'hello123' };
      const username = Demo.username;
      const password = Demo.password;
      this.loginDemo(username, password);
    }
  }

  // handlePageChange() {
  //   window.location.hash = "/login";
  //   this.setState({
  //     Demo: true
  //   });
  // }

  loginDemo(username, password) {
    const user = username.split("");
    const pass = password.split("");

    // const inputDemo = (user) => {
    //   for (let i = 0; i <= user.length; i++) {
    //     let char = user[i];
    //     this.setState({
    //       username: this.state.username + char
    //     }),
    //       () => setTimeout(() => { })
    //   }
    // }

    const inputDemo = (user) => {
      if (user.length > 0) {
        // let char = user.shift();
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
        // debugger
        // let char = pass.shift();
        this.setState({
          password: this.state.password + pass.shift()
        },
          () => setTimeout(() => { inputDemoPass(pass) }, 100)
        )
      } else {
        // const Demo = Object.assign({}, this.state);
        const Demo = this.state
        this.props.processForm(Demo);
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

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // const user = Object.assign({}, this.state);
  //   // this.props.processForm(user);
  // }

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
              <ul className="sessionform-errors">
                {this.renderErrors()}
              </ul>
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
            <Link to='/login' className="demo" onClick={this.handleDemo} ><span>Demo</span></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm;