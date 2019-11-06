import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// import SessionForm from './signup_form';
import LoginForm from "./login_form";
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  ui: state.ui,
  formType: 'Log In'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));