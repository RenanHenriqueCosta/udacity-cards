import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const CardUse = (props) => {
  return(
    <View style={styles.card}>
      {props.children}
    </View>
  )
}

export default CardUse
