import React, { Component } from 'react'
import { Text, View, Easing, Platform, ProgressViewIOS, ProgressBarAndroid, Dimensions } from 'react-native'
import { colors } from '../../styles'
import { Button } from '../../components'
import { CardUse, FlipView } from '../../components'
import styles from './styles'
import { connect } from 'react-redux' 

export class Quiz extends Component {

  state = {
    isFlipped:false,
    currentView:'flip',
    question:0,
    progress:0,
    percentual:0,
    numberCards:1
  }

  static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.routeName} - ${navigation.state.params.currentDeck}`
  })

  renderProgress = (os) => {
    const { progress, numberCards } = this.state
    const { deck } = this.props
    return(
      <View>
        {os === 'ios' ? (
          <View>
            <ProgressViewIOS progressTintColor={colors.indigo} progress={progress/deck.questions.length} style={styles.progress}/>
            <View style={styles.numberCardsView}>
              <Text style={styles.numberCardsText}>{`${numberCards}/${deck.questions.length}`}</Text>
            </View>
          </View>
        ):(
          <ProgressBarAndroid style={styles.progress} progress={progress/deck.questions.length} />
        )}
      </View>
    )
  }

  renderFront = (props) => {
    const { question } = props
    return(
      <View style={styles.container}> 
        <CardUse>
          <View style={styles.card}>
            <Text style={styles.text}>{`${question}`}</Text>
          </View>
            <Button title="view answer" type="view" press={() => this.flip()} />
        </CardUse>
        <View style={styles.progressLocation}>
          {this.renderProgress(Platform.OS)}
        </View>
      </View>
    )
  }

  renderBack = (props) => {
    const { question } = props
    return(
      <View style={styles.container}>
        <CardUse>
          <View style={styles.card}>
            <Text style={styles.subText}>{`${props.answer}`}</Text>
          </View>
          <View style={styles.buttonsSpace}>
            <Button title="correct" type="correct" press={() => this.saveAnswer('correct')} />
            <Button title="incorrect" type="incorrect" press={() => this.saveAnswer('incorrect')} />
          </View>
        </CardUse>
        <View style={styles.progressLocation}>
          {this.renderProgress(Platform.OS)}
        </View>
      </View>
    )
  }
  

  renderFinal = () => {
    const { percentual } = this.state
    const { deck, navigation } = this.props
    return(
      <View style={styles.container}> 
        <CardUse>
          <View style={styles.card}>
            <Text style={styles.text}>{`Parabéns`}</Text>
            <Text style={styles.subText}>{`Você conseguiu acertar ${((percentual/deck.questions.length * 100).toFixed())}% das questões`}</Text>
          </View>
          <Button title="back to cards" type="view" press={() => navigation.navigate('Home')} />
        </CardUse>
        <View style={styles.progressLocation}>
          {this.renderProgress(Platform.OS)}
        </View>
      </View>
    )
  }

  redirectView = () => {
    const { question } = this.state
    const { deck } = this.props
    if(deck.questions.length - 1 > question){
      this.setState({ question: this.state.question += 1 })
    } else {
      this.setState({ currentView:'final'})
    }
  }

  saveAnswer = (answer) => {
    const { progress, percentual, numberCards } = this.state
    const { deck } = this.props
    this.setState({ progress: this.state.progress += 1})
    answer === 'correct' ? this.setState({ percentual: this.state.percentual += 1}) : null
    numberCards < deck.questions.length ? this.setState({ numberCards: this.state.numberCards += 1}) : null
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