import React, { Component } from 'react'
import { Text, View, Easing, TextInput, KeyboardAvoidingView } from 'react-native'
import { Button, CardUse } from '../../components'
import { connect } from 'react-redux'
import { AddQuestion } from '../../redux/action/decks'
import FlipView from 'react-native-flip-view'
import styles from './styles'

class Deck extends Component {

  state = {
    isFlipped:false,
    question:'',
    answer:'',
    disable:true
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck.title}`
  })

  changeQuestion = (question) => {
    this.setState({ question })
    this.state.question !== '' && this.state.answer !== '' ? this.setState({ disable: false }) : this.setState({ disable: true }) 
  }

  changeAnswer = (answer) => {
    this.setState({ answer })
    this.state.question !== '' && this.state.answer !== '' ? this.setState({ disable: false }) : this.setState({ disable: true }) 
  }

  saveQuestion = (title) => {
    var questions = {
      question:this.state.question,
      answer:this.state.answer
    }
    this.props.AddQuestion(title, questions)
    this.props.navigation.navigate('Home')
  }

  renderFront = (props) => (
    <CardUse>
      <View style={styles.title}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.subText}>{`${props.questions.length} cards`}</Text>
        <Button type="cardCreation" title={'create'} press={() => this.flip()} disable={false}/>
        {props.questions.length > 0
          ? <Button type="cardCreation" title={'start quiz'} press={() => this.props.navigation.navigate('Quiz', { currentDeck: props.title })} disable={false}/>
          : null
        }
      </View>
    </CardUse>
  )

  renderBack = (props) => (
    <CardUse>
      <View style={{ marginBottom: 120}}> 
        <View style={styles.title}>
          <Text style={styles.textTitleForm}>{props.title}</Text>
          <View>
            <Text style={styles.subText}>{`Question?`}</Text>
            <TextInput 
              style={styles.input}
              placeholder="Add a question"
              value={this.state.question}
              onChangeText={(question) => this.changeQuestion(question)}
            />
          </View>
          <View>
            <Text style={styles.subText}>{`Answer?`}</Text>
            <TextInput 
              style={styles.input}
              placeholder="Add a answer"
              value={this.state.answer}
              onChangeText={(answer) => this.changeAnswer(answer)}
            />
          </View>
          <Button type="cardCreation" title={'create'} press={() => this.saveQuestion(props.title)} disable={this.state.disable}/>
        </View>
      </View>
    </CardUse>
  )

  flip = () => {
    this.setState({isFlipped: !this.state.isFlipped});
  };

  render() {
    const { deck } = this.props.navigation.state.params
    return (
      <FlipView style={styles.flipCard}
        front={this.renderFront(deck)}
        back={this.renderBack(deck)}
        isFlipped={this.state.isFlipped}
        flipAxis="y"
        flipEasing={Easing.out(Easing.ease)}
        flipDuration={500}
        perspective={1000}/>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { AddQuestion })(Deck)