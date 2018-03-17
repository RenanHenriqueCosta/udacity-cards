import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'

export class Card extends Component {
  render() {
    const { title, text, navigate } = this.props
    return (
      <TouchableOpacity onPress={() => navigate('Deck')} style={styles.card}>
        <View style={{ justifyContent:'center', alignItems:'center'}}>
          <View style={styles.title}>
            <Text style={styles.text}>{this.props.title}</Text>
            <Text style={styles.subText}>{`0 cards`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default Card