import React from 'react';
import { connect } from 'react-redux';
import SignUpForm from './signup_form';
import { signup, clearErrors } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  clearErrors: () => clearErrors()
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)