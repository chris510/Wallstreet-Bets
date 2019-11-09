import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavSplash from './nav_splash';
import { logout } from '../../actions/session_actions';
import { addDemoState } from '../../actions/demo_actions';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  uI: state.ui.demoUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  // processForm: (user) => dispatch(login(user)),
  addDemoState: (boolean) => addDemoState(boolean)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavSplash));