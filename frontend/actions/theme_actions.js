export const RECEIVE_THEME = 'RECEIVE_THEME';

const receiveTheme = theme => ({
  type: RECEIVE_THEME,
  theme
});

export const changeTheme = (theme) => (
  dispatch(receiveTheme(theme))
);