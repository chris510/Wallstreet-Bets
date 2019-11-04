import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from "../svg_icons/svg.icons";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='nav'>
            <div id="nav-left">
              <h1 className="robinhood">RobinHood</h1>
              <a href="https://robinhood.com/">
                <SVGIcon name="robinhood_logo" width={40} />
              </a>
            </div>
          <div className='nav-mid'>
            <div className='Contact'>
              <a href="mailto:christrinh5@gmail.com">
                <SVGIcon name="envelope" width={45} />
              </a>
              <a href="https://github.com/chris510">
                <SVGIcon name="github_1" width={40} />
              </a>
              <a href="https://www.linkedin.com/in/christopher-trinh-504407104/">
                <SVGIcon name="linkedin_1" width={40} />
              </a> 
            </div>
          </div >
        <div className='nav-right'>
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input type="checkbox" id="checkbox" />
              <div className="slider round"></div>
            </label>
          </div>
          <div>
            <Link to='/login' className="sign-in"><span>Sign In</span></Link>
          </div>
          <div>
            <Link to='/signup' className="sign-up"><span>Sign Up</span></Link>
          </div>
        </div>
     </div>
    )
  }
}

export default Nav;