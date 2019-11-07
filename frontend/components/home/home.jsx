import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="home-container-1">
          THIS IS THE HOME PAGE
        </div>
      </div>
    )
  }
}

export default Home;