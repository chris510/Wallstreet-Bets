import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from '../svg_icons/svg.icons';
import { withRouter, Redirect } from 'react-router-dom'

class NavSplash extends React.Component {
  constructor(props) {
    super(props); 
    this.changeTheme = this.changeTheme.bind(this);
    this.redirectDemo = this.redirectDemo.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }

  changeTheme() {
    const checkbox = document.querySelector('input[name=theme]');

    checkbox.addEventListener('change', function () {
      if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
      }
    })

    let trans = () => {
      document.documentElement.classList.add('transition');
      window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
      }, 1000)
    }
  }

  redirectDemo() {
    this.props.addDemoState({ demoUser: true });
    window.location.hash = "/login";
    // return <Redirect to='/login' />
  }

  // handleLogout() {
  //   this.props.logout();
  //   window.location.hash = "/";
  // }

  render() {
    const { logout } = this.props;

    if (!this.props.currentUser) {
      return (
        <div className='nav'>
              <div className="nav-left">
                <div className="logo">
                  <a target="_blank" href="https://roho.herokuapp.com/" className="nav-title">
                    <h1 className="nav-title">WallStreetBets</h1>
                  </a>
                  <a target="_blank" href ="https://roho.herokuapp.com/">
                    <SVGIcon name="robinhood_logo" width={45} />
                  </a>
                </div>
                <div className='contact'>
                  <a href="mailto:christrinh5@gmail.com">
                    <SVGIcon name="envelope" width={35} />
                  </a>
                  <a target="_blank" href="https://github.com/chris510">
                    <SVGIcon name="github_1" width={30} />
                  </a>
                  <a target="_blank" href="https://www.linkedin.com/in/christopher-trinh-504407104/">
                    <SVGIcon name="linkedin_1" width={30} />
                  </a> 
                </div>
              </div>
            <div className='nav-right'>
              <div className="demo-container">
                <Link to='/login' className="demo" onClick={this.redirectDemo} ><span>Demo</span></Link>
              </div>
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" name="theme" onChange={this.changeTheme} />
                  <div className="slider round"></div>
                </label>
              </div>
              <div className="sign-in-container">
                <Link to='/login' className="sign-in"><span>Sign In</span></Link>
              </div>
              <div className= "sign-up-container">
                <Link to='/signup' className="sign-up"><span>Sign Up</span></Link>
              </div>
          </div>
       </div>
      )
    } else {
      return (
        <div className="nav">
          <div className="nav-left">
            <div className="logo">
              <a href="https://robinhood.com/" className="nav-title">
                <h1 className="nav-title">WallStreetBets</h1>
              </a>
              <a href="https://robinhood.com/">
                <SVGIcon name="robinhood_logo" width={45} />
              </a>
            </div>
            <div className='contact'>
              <a href="mailto:christrinh5@gmail.com">
                <SVGIcon name="envelope" width={40} />
              </a>
              <a href="https://github.com/chris510">
                <SVGIcon name="github_1" width={35} />
              </a>
              <a href="https://www.linkedin.com/in/christopher-trinh-504407104/">
                <SVGIcon name="linkedin_1" width={35} />
              </a>
            </div>
            <div className="search-bar-container">
              <input 
                type="search" 
                aria-labelledby="search-button" />
              <button id="search-button" type="submit">Search</button>
            </div>
              <SVGIcon name="search" width={20} />
          </div>
          <div className="nav-right-2">
            <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" name="theme" onChange={this.changeTheme} />
                <div className="slider round"></div>
              </label>
            </div>
            <div className="home-button-container">
              <Link to ="/home" className="home-button"><span>Home</span></Link>
            </div>
            <div className="log-out-container">
              <Link to="/" className="log-out" onClick={logout}><span>Log Out</span></Link>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default NavSplash;