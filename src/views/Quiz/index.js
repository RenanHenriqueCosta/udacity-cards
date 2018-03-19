import React, { Component } from 'react'
import { Text, View, Easing, Platform, ProgressViewIOS, ProgressBarAndroid, Dimensions } from 'react-native'
import { colors } from '../../styles'
import { Button } from '../../components'
import { connect } from 'react-redux' 
import { CardUse } from '../../components'
import FlipView from 'react-native-flip-view'
import styles from './styles'

export class Quiz extends Component {

  state = {
    isFlipped:false,
    currentView:'flip',
    question:0,
    progress:0,
    percentual:0
  }

  static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.routeName} - ${navigation.state.params.currentDeck}`
  })

  renderProgress = (os) => (
    <View>
      {os === 'ios' ? (
        <ProgressViewIOS progressTintColor={colors.indigo} progress={this.state.progress/this.props.deck.questions.length} style={styles.progress}/>
      ):(
        <ProgressBarAndroid style={styles.progress} progress={this.state.progress/this.props.deck.questions.length} />
      )}
    </View>
  )

  renderFront = (props) => (
    <View style={styles.container}> 
      <CardUse>
        <View style={styles.card}>
          <Text style={styles.text}>{`${props.question}`}</Text>
        </View>
          <Button title="view answer" press={() => this.flip()} />
      </CardUse>
      <View style={styles.progressLocation}>
        {this.renderProgress(Platform.OS)}
      </View>
    </View>
  )

  renderBack = (props) => (
    <View style={styles.container}>
      <CardUse>
        <View style={styles.card}>
          <Text style={styles.text}>{`${props.answer}`}</Text>
        </View>
        <View style={styles.buttonsSpace}>
          <Button title="correct" press={() => this.saveAnswer('correct')} />
          <Button title="incorrect" press={() => this.saveAnswer('incorrect')} />
        </View>
      </CardUse>
      <View style={styles.progressLocation}>
        {this.renderProgress(Platform.OS)}
      </View>
    </View>
  )

  renderFinal = () => (
    <View style={styles.container}> 
      <CardUse>
        <View style={styles.card}>
          <Text style={styles.text}>{`Parabéns`}</Text>
          <Text style={styles.subText}>{`Você conseguiu acertar ${((this.state.percentual/this.props.deck.questions.length * 100).toFixed())}% das questões`}</Text>
        </View>
        <Button title="back to cards" press={() => this.props.navigation.navigate('Home')} />
      </CardUse>
      <View style={styles.progressLocation}>
        {this.renderProgress(Platform.OS)}
      </View>
    </View>
  )

  redirectView = () => {
    if(this.props.deck.questions.length - 1 > this.state.question){
      this.setState({ question: this.state.question += 1 })
    } else {
      this.setState({ currentView:'final'})
    }
  }

  saveAnswer = (answer) => {
    this.setState({ progress: this.state.progress += 1})
    answer === 'correct' ? this.setState({ percentual: this.state.percentual += 1}) : null
    this.redirectView()
    this.flip()
  }
  
  flip = () => {
    this.setState({isFlipped: !this.state.isFlipped});
  }

  render() {
    const { questions } = this.props.deck 
    return(
      <FlipView 
        style={styles.flipCard}
        front={this.state.currentView === 'flip' ? this.renderFront(questions[this.state.question]) : this.renderFinal()}
        back={this.renderBack(questions[this.state.question])}
        isFlipped={this.state.isFlipped}
        flipAxis="y"
        flipEasing={Easing.out(Easing.ease)}
        flipDuration={500}
        perspective={1000}/>
    )
  }
}

function mapSatatToProps(state, ownProps){
  const { currentDeck } = ownProps.navigation.state.params
  return{
    deck:state.decks[currentDeck]
  }
}

export default connect(mapSatatToProps)(Quiz)