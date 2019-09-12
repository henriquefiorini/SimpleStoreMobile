import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Routes />
    </>
  );
}

export default App;
