import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from '../svg_icons/svg.icons';
import SearchBarContainer from '../search/search_bar_container';
import Hamburger from '../hamburger/hamburger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faHome, faSignInAlt, faUserPlus, faIdCard } from '@fortawesome/free-solid-svg-icons'


class NavSplash extends React.Component {
  constructor(props) {
    super(props);
    this.changeTheme = this.changeTheme.bind(this);
    this.redirectDemo = this.redirectDemo.bind(this);
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.refreshPageOrRedirect = this.refreshPageOrRedirect.bind(this);
    this.closeHamburger = this.closeHamburger.bind(this);
  }

  closeHamburger() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuItems = document.querySelector('.menu-items');
    if (hamburgerBtn.classList.contains("close")) {
      hamburgerBtn.classList.remove("close");
      menu.classList.remove("open");
      menuNav.classList.remove("open");
      menuItems.classList.remove("open");
    }
  }

  handleHamburgerClick() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuItems = document.querySelector('.menu-items');
    if (hamburgerBtn.classList.contains("close")) {
      hamburgerBtn.classList.remove("close");
      menu.classList.remove("open");
      menuNav.classList.remove("open");
      menuItems.classList.remove("open");
    } else {
      hamburgerBtn.classList.add("close");
      menu.classList.add("open");
      menuNav.classList.add("open");
      menuItems.classList.add("open");
    }
  }

  refreshPageOrRedirect() {
    if (this.props.match.path === "/#") {
      window.location.reload();
    } else {
      this.props.history.push("/#");
    }
    
  }
  
  toggleDarkMode(e) {
    const body = document.querySelector("html");
    if (body.getAttribute("data-theme") === "light") {
      document.documentElement.setAttribute('data-theme', 'dark');
      e.target.innerHTML = `<i class="menu-item-symbol fas fa-sun"></i>Light Mode`;
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      e.target.innerHTML = `<i class="menu-item-symbol fas fa-moon"></i>Dark Mode`;
    }
  }

  changeTheme() {
    const checkbox = document.querySelector('input[name=theme]');

    checkbox.addEventListener('change', function () {
      if (this.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark')
      } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
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
    this.closeHamburger();
    this.props.addDemoState({ demoUser: true })
    window.location.hash = "/login";
  }

  render() {
    const { logout } = this.props;
    if (!this.props.currentUser) {
      return (
        <div className='nav'>
          <div className="nav-left">
            <div className="logo">
              <Link to='/' className="nav-title">
                <h1 className="nav-title">WallstreetBets</h1>
              </Link>
              <Link to='/'>
                <SVGIcon name="robinhood_logo" width={45} />
              </Link>
            </div>
            {/* <div className='contact'>
              <a href="mailto:christrinh5@gmail.com">
                <SVGIcon name="envelope" width={35} />
              </a>
              <a target="_blank" href="https://github.com/chris510">
                <SVGIcon name="github_1" width={30} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/christopher-trinh-504407104/">
                <SVGIcon name="linkedin_1" width={30} />
              </a> 
            </div> */}
          </div>  
          <Hamburger handleHamburgerClick={this.handleHamburgerClick} />
          <div className="menu">
            <ul className="menu-nav">
                <li className="menu-header">
                  Menu
                </li>
                { 
                  (this.props.match.path !== "/#") && 
                  (
                    <li className="menu-items" onClick={this.refreshPageOrRedirect}>
                      <FontAwesomeIcon className="menu-item-symbol" icon={faHome} />
                      Home
                    </li>
                  ) 
                }
                <li className="menu-items" onClick={this.toggleDarkMode}>
                  {/* <i className="menu-item-symbol fas fa-moon"></i> */}
                  <FontAwesomeIcon className="menu-item-symbol" icon={faMoon} />
                  Dark Mode
                </li>
                <li className="menu-items" onClick={this.redirectDemo} >
                  {/* <i className="menu-item-symbol far fa-id-card"></i> */}
                  <FontAwesomeIcon className="menu-item-symbol" icon={faIdCard} />
                  Demo
                </li>     
                {
                  (this.props.match.path !== "/login") && 
                (
                  <li className="menu-items" onClick={() => this.props.history.push("/login")} >
                    {/* <i className="menu-item-symbol fas fa-sign-in-alt"></i> */}
                    <FontAwesomeIcon className="menu-item-symbol" icon={faSignInAlt} />
                    Log In
                  </li>
                  ) 
                }
                {
                  (this.props.match.path !== "/signup") && 
                  (
                    <li className="menu-items" onClick={() => this.props.history.push("/signup")} >
                      {/* <i className="menu-item-symbol fas fa-user-plus"></i> */}
                      <FontAwesomeIcon className="menu-item-symbol" icon={faUserPlus} />
                      Sign Up
                    </li>
                  ) 
                }
            </ul>
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
              <Link to='/home' className="nav-title">
                <h1 className="nav-title">WallStreetBets</h1>
              </Link>
              <Link to='/home'>
                <SVGIcon name="robinhood_logo" width={45} />
              </Link>
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
            <SearchBarContainer />
            {/* <div className="search-bar-container">
              <input 
                aria-labelledby="search-button" />
              <button id="search-button" type="submit">
                <SVGIcon name="search" width={25} />
              </button>
            </div> */}
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