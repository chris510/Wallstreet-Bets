import React from 'react';
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";

import { ThemeProvider } from './change_theme/theme_context';

const Root = ({ store }) => (
  <ThemeProvider>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ThemeProvider>
);

export default Root;