import React from 'react';
import { Link } from 'react-router-dom';
const video = ['./splash1.gif', './debitcard_turn.mp4'];

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video1: video[0],
      video3: video[1]
    }
  }

  render() {
    return (
      <div className="splash-main">
        <div className="splash-container-1">
          <div className="splash-part-1">
            <div className="splash-text-1 ">
              <h1>It's Time to do</h1>
            </div>
            <div className="splash-text-2">
              <h1>Money</h1>
            </div>
            <div className="splash-text-3">
              <h2> Robinhood, a pioneer of commission-free investing,</h2>
              <h2> gives you access to investing and more</h2>
              <h2> ways to make your money work harder.</h2>
            </div>
          </div>
            <div className="splash-vid-1">
              <img src={this.state.video1}/>
            </div>
        </div>
        <div className="splash-container-2">
          <div className="splash-part-2">
            <div className="splash-text-4">
              <h1>Introduction Cash</h1>      
            </div>
            <div className="splash-text-5">
              <h1>Management</h1>      
            </div>
            <div className="splash-text-6">
              <h2>Invest, spend, and earn 1.80% APY*—all through your</h2>
              <h2>brokerage account.</h2>
            </div>
          </div>
          <div className="splash-vid-2">
            <video ref="vidRef"
              src={this.state.video3}
              width="600px" height="500px"
              autoPlay={true} loop muted={true}
              className="splash-video"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;
