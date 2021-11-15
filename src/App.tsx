import React from 'react'
import { Provider } from 'react-redux';
import { store } from './redux';

import { Routes } from "./Routes";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
