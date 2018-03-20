import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export class Button extends Component {

  renderButton = () => {
    const { title, disable, press } = this.props
    switch (this.props.type) {
      case 'danger':
        return (
          <TouchableOpacity disabled={disable} onPress={() => press()} style={styles.currentCard}>
            <Text style={disable ? styles.disabled: styles.text}>{title}</Text>
          </TouchableOpacity>
        )
        break;
      case 'cardCreation':
        return (
          <TouchableOpacity disabled={disable} onPress={() => press()} style={styles.cardCreation}>
            <Text style={disable ? styles.disabled: styles.cardCreationText}>{title}</Text>
          </TouchableOpacity>
        )
        break;
      case 'quiz':
        return (
          <TouchableOpacity disabled={disable} onPress={() => press()} style={styles.cardQuiz}>
            <Text style={disable ? styles.disabled: styles.cardCreationQuiz}>{title}</Text>
          </TouchableOpacity>
        )
        break;
      case 'correct':
        return (
          <TouchableOpacity disabled={disable} onPress={() => press()} style={styles.cardCorrect}>
            <Text style={disable ? styles.disabled: styles.cardCreationCorrect}>{title}</Text>
          </TouchableOpacity>
        )
        break;
      case 'incorrect':
        return (
          <TouchableOpacity disabled={disable} onPress={() => press()} style={styles.cardIncorrect}>
            <Text style={disable ? styles.disabled: styles.cardCreationIncorrect}>{title}</Text>
          </TouchableOpacity>
        )
        break;
      case 'view':
        return (
          <TouchableOpacity disabled={disable} onPress={() => press()} style={styles.cardView}>
            <Text style={disable ? styles.disabled: styles.cardCreationView}>{title}</Text>
          </TouchableOpacity>
        )
        break;
      default:
        return (
          <TouchableOpacity disabled={disable} onPress={() => press()} style={styles.currentCard}>
            <Text style={disable ? styles.disabled: styles.text}>{title}</Text>
          </TouchableOpacity>
        )
        break;
    }
  }

  render() {
    return (
      <View>
        {this.renderButton()}
      </View>
    )
  }
}

export default Button