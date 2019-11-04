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
        <div className='sign-up-link'>
         <Link to='/signup'>Sign Up</Link>
       </div>
         <div className='log-in-link'>
          <Link to='/login'>Log In</Link>
        </div>
        <div className='footer'>
          <div className='icons'>
            <a href="https://robinhood.com/">
              <SVGIcon name="robinhood_logo" width={50} />
            </a>
            <a href="mailto:christrinh5@gmail.com">
              <SVGIcon name="envelope" width={65} />
            </a>
            <a href="https://github.com/chris510">
              <SVGIcon name="github_1" width={50} />
            </a>
            <a href="https://www.linkedin.com/in/christopher-trinh-504407104/">
              <SVGIcon name="linkedin_1" width={50} />
            </a> 
          </div >
        </div>
     </div>
    )
  }
}

export default Nav;