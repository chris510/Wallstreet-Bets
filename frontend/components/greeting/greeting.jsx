import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  // debugger
  if (props.currentUser) {
    return (
      <div>
        <div>Welcome {props.currentUser.username}</div>
        <button onClick={props.logout}>Log Out</button>
      </div>
    )
  }
  else {
    return (
      <div className='user-auth'>
        <div className='sign-up-link'>
          <Link to='/signup'>Sign Up</Link>
        </div>
        <div className='log-in-link'>
          <Link to='/login'>Log In</Link>
        </div>
      </div>
    )
  }
}

export default Greeting;