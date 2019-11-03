import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting'
import { logout } from '../../actions/session_actions'


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id] //user functionality
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);