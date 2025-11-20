import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/AuthContext';
import AppWrapper from './AppWrapper';

ReactDOM.render(
  <AuthProvider>
    <AppWrapper />
  </AuthProvider>,
  document.getElementById('root')
);
