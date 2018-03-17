import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import FlipCard from 'react-native-flip-card'

const CardUse = (props) => {
  return(
    <FlipCard 
      style={styles.card}
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}>
      <View style={styles.container}>
        {props.children}
      </View>
    </FlipCard>
  )
}

export default CardUse
