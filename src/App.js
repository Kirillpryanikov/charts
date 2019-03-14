import React from 'react';
import { Provider } from 'react-redux';

import Dashboard from './Screens/Dashboard'
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <Dashboard/>
      </Provider>
    );
  }
}

export default App;
