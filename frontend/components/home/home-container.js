import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Home from './home'

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);