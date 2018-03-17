import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { CreateCard } from '../../components'
import styles from './styles'

export class CreateDeck extends Component {

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.card}>
        <CreateCard navigate={navigate}/>
      </View>
    )
  }
}

export default CreateDeck