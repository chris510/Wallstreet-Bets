import React from 'react';
import { Link } from 'react-router-dom';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = { username: 'chris123', password: 'hello123' }
    this.props.processForm(demoUser);
  }

  render() {
    return (
      <Link to='/login' onClick={this.handleDemo} className="demo"><span>Demo</span></Link>
    )
  }
}

export default Demo;