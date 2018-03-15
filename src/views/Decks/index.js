import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export class Decks extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent Packs </Text>
        <Button title="Teste" onPress={() => this.props.navigation.navigate('Deck')} />
      </View>
    )
  }
}

export default Decks