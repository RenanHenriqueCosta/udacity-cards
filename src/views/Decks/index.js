import React, { Component } from 'react'
import { Text, View, Button, FlatList } from 'react-native'
import { Card } from '../../components'
import styles from './styles'
import { connect } from 'react-redux'

export class Decks extends Component {

  componentDidMount(){
  }

  renderList = () => (
    <FlatList
      data={this.props.decks}
      renderItem={ ({item, index}) => <Card {...item} navigate={this.props.navigation.navigate} />}
      keyExtractor={item => item.index}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        {this.renderList()}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  decks:state.decks
})

export default connect(mapStateToProps)(Decks)