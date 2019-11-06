import React from 'react';
import { connect } from 'react-redux';
import Nav from './nav'
import { logout, login} from '../../actions/session_actions'


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id] //user functionality
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);