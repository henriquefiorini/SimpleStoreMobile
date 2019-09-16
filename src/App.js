import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={Store}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Routes />
    </Provider>
  );
}

export default App;
