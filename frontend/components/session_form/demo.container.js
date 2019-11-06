import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Demo from './demo';

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Demo);

