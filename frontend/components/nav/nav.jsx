import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from "../svg_icons/svg.icons";

// const styles = {
//   display: "flex",
//   flexWrap: "wrap",
//   alignItems: "center",
//   fontFamily: "sans-serif",
//   justifyContent: "space-between"
// };




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
                <SVGIcon name="robinhood_logo" width={50} />
              </a>
            </div>
          <div className='nav-mid'>
            <div className='Contact'>
              <a href="mailto:christrinh5@gmail.com">
                <SVGIcon name="envelope" width={50} />
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
            <button>DARK MODE</button>
          <div>
            <Link to='/signup'>Sign Up</Link>
          </div>
          <div>
            <Link to='/login'>Log In</Link>
          </div>
        </div>
     </div>
    )
  }
}

export default Nav;