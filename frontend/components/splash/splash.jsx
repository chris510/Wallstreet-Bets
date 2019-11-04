import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return (
      <div className="splash-wrapper">
        <div className="splash-intro">
          <div className="cover"></div>
          <div className="splash-text-1">
            <h1>
              Its Time
            </h1>
          </div>
          <div className="splash-text-2">
            <h1>
              To do Money
            </h1>
          </div>
          <br />
          <div className="splash-text-3">
            <h2> Robinhood, a pioneer of commission-free investing,</h2>
            <h2> gives you access to investing and more ways to make your money work harder.</h2>
          </div>
          <Link to="/signup">
            <div className="sign-up">
              <h4 className="sign-up-text">Sign Up</h4>
            </div>
          </Link>
        </div>
        <div className="front-page-pic-container">
          <div className="front-page-pic"></div>
        </div>
      </div>
    )
  }
}

export default Splash;