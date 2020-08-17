import React from 'react';
import ThemeSwitcherProvider from './context/ThemeSwitcher';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import history from './services/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <ThemeSwitcherProvider>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </ThemeSwitcherProvider>
    </Router>
  );
}

export default App;
