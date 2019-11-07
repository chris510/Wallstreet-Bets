import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOG_OUT_CURRENT_USER = 'LOG_OUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOG_OUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
    .then( user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON)))
);

export const clearErrors = dispatch => (
  dispatch(clearErrors())
);