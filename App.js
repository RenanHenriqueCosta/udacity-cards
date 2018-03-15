import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/config/routes'

export default class App extends React.Component {
  render() {
    return (
      <Navigator />
    );
  }
}
