import React from 'react';
import { connect } from 'react-redux';
// import SessionForm from './signup_form';
import LoginForm from "./login_form";
import { login } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Log In'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)