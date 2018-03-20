import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/config/routes'
import store from './src/redux/store'
import { Provider } from 'react-redux'
import { setLocalNotification } from './src/utils/notifications'

class App extends Component {
  
  componentDidMount() {
    setLocalNotification()
  }

  render(){
    return(
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}

export default App
