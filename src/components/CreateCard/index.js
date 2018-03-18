import React, { Component } from 'react'
import { Text, View, TextInput, Keyboard } from 'react-native'
import { Button } from '../index'
import { AddDeck } from '../../redux/action/decks'
import { connect } from 'react-redux'
import styles from './styles'

export class CreateCard extends Component {

  state = {
    disable:true,
    name:''
  }

  componenDidMount(){
    this.setState({ name: '' })
  }

  changeName = (name) => {
    this.setState({ name })
    name !== '' ? this.setState({ disable: false }) : this.setState({ disable: true }) 
  }

  saveDeck = (name) => {
    this.props.AddDeck(name)
    Keyboard.dismiss()
    this.setState({ name: ''})
    this.props.navigate('Home')
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.title}>
          <Text style={styles.text}>New deck</Text>
          <View style={styles.line} />
        </View>
        <View style={{ paddingHorizontal: 10}}>
          <TextInput 
            style={styles.input}
            autoCorrect={false}
            placeholder="Add a name for your deck"
            value={this.state.name}
            onChangeText={(name) => this.changeName(name)}
          />
          <View style={styles.line} />
          <Button title={'Create'} press={() => this.saveDeck(this.state.name)} disable={this.state.disable}/>
        </View>
      </View>
    )
  }
}

export default connect(null, { AddDeck })(CreateCard)