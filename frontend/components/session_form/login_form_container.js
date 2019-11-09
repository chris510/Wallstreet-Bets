import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// import SessionForm from './signup_form';
import LoginForm from "./login_form";
import { login, clearErrors } from '../../actions/session_actions';
import { removeDemoState } from "../../actions/demo_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  ui: state.ui.demoUser,
  formType: 'Sign In'
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  removeDemoState: (boolean) => removeDemoState(boolean),
  clearErrors: () => clearErrors()
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));