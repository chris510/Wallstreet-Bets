import React from 'react';
import { Link } from 'react-router-dom';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleDemo = this.handleDemo.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }
  
  handleDemo(e) {
    e.preventDefault();
    this.handlePageChange();
    const demoUser = { username: 'chris123', password: 'hello123' };

    const username = demoUser.username;
    const password = demoUser.password;
    this.setState({ 
      username: "", password: "" 
    }, () => this.loginDemoUser(username, password));

    // this.loginDemoUser(demoUser.username, demoUser.password);
    // this.props.processForm(demoUser);
  }
  
  loginDemoUser(username, password) {
    const user = username.split("");
    const pass = password.split("");

    // const inputDemoUser = (user) => {
    //   for (let i = 0; i <= user.length; i++) {
    //     let char = user[i];
    //     this.setState({
    //       username: this.state.username + char
    //     }),
    //       () => setTimeout(() => { })
    //   }
    // }

    const inputDemoUser = (user) => {
      if (user.length > 0) {
        let char = user.shift();
        this.setState({
          username: this.state.username + char 
        },
          () => setTimeout(() => { inputDemoUser(user) }, 50)
        )
      } else {
        inputDemoPass(pass);
      }
    }

    const inputDemoPass = (pass) => {
      if (pass.length > 0) {
        // debugger
        let char = pass.shift();
        this.setState({ 
          password: this.state.password + char 
        },
          () => setTimeout(() => { inputDemoPass(pass) }, 50)
        )
      } else {
        const demoUser = Object.assign({}, this.state);
        this.props.processForm(demoUser);
      }
    }
    inputDemoUser(user);
  }

  handlePageChange() {
    window.location.hash = "/login";
  }


  render() {
    return (
      <Link to='/login' className="demo" onClick={this.handleDemo} ><span>Demo</span></Link>
    )
  }
}

export default Demo;