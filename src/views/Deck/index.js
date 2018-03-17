import React, { Component } from 'react'
import { Text, View, ProgressViewIOS } from 'react-native'
import { Button, CardUse } from '../../components'
import styles from './styles'


class Deck extends Component {

  static navigationOptions = () => ({
    title:'React' 
  })

  render() {
    return (
      <CardUse>
        <View style={styles.title}>
          <Text style={styles.text}>{'React'}</Text>
          <Text style={styles.subText}>{`0 cards`}</Text>
          <Button type="cardCreation" title={'create'} press={() => console.log('quando inverno chegar')} disable={false}/>
          <Button type="cardCreation" title={'start quiz'} press={() => console.log('quando inverno chegar')} disable={false}/>
        </View>
      </CardUse>
    )
  }
}

export default Deck