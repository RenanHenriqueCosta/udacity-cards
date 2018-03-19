import types from '../config/types'

export const AddDeck = (deckName) => {
  return {
    type:types.ADD_DECK,
    deckName
  }
}

export const AddQuestion = (title ,NewQuestion) => {
  return {
    type:types.ADD_QUESTION,
    title,
    NewQuestion,
  }
}

export const GetData = () => {
  return {
    type:types.GET_DECK,
    payload:null
  }
}