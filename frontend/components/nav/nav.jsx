import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from '../svg_icons/svg.icons';
import Demo from '../session_form/demo.container'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.changeTheme = this.changeTheme.bind(this);
    // this.handleDemo = this.handleDemo.bind(this);
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

  // handleDemo(e) {
  //   e.preventDefault();
  //   const demoUser = {username: 'chris123', password: 'hello123'}
  //   this.props.processForm(demoUser);
  // }

  render() {
    return (
      <div className='nav'>
            <div className="nav-left">
              <div className="logo">
            <a href="https://robinhood.com/" className="robinhood">
                <h1 className="robinhood">RobinHood</h1>
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
            </div>
        <div className='nav-right'>
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" name="theme" onChange={this.changeTheme} />
              <div className="slider round"></div>
            </label>
          </div>
            <div className="demo-container">
              <Demo />
            </div>
            <div className="sign-in">
              <Link to='/login' className="sign-in"><span>Sign In</span></Link>
            </div>
            <div className= "sign-in-container">
              <Link to='/signup' className="sign-up"><span>Sign Up</span></Link>
            </div>
        </div>
     </div>
    )
  }
}

export default Nav;