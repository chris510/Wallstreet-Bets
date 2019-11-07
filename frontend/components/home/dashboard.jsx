import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-container-1">
          THIS IS THE dashboard PAGE
        </div>
      </div>
    )
  }
}

export default Dashboard;