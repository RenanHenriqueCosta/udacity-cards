import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/config/routes'
import store from './src/redux/store'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
