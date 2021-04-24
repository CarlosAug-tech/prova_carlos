import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';
import Routes from './routes';
import GlobalStyle from './assets/Styles/global';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <AppProvider>
        <Header />
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
}
