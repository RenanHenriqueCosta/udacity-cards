import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'

const Card = (props) => {
  const { title, text, navigate, questions } = props
  return(
    <TouchableOpacity onPress={() => navigate('Deck', { deck: props })} style={styles.card}>
      <View style={{ justifyContent:'center', alignItems:'center'}}>
        <View style={styles.title}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.subText}>{ questions.length > 0 ? `${questions.length} cards` : `0 cards` }</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default Card