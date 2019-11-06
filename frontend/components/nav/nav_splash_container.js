import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Nav from './nav_splash'
import { logout, login} from '../../actions/session_actions'


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id] //user functionality
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  processForm: (user) => dispatch(login(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));