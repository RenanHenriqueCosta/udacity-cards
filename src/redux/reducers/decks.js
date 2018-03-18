import types from '../config/types'

const INITIAL_STATE = {
  React: { title:'React', questions:[ { question: 'What is React?', answer: 'A library for managing user interfaces' }] },
  Node: { title:'Node', questions:[] },
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case types.GET_DECK:
      return { ...state }
    case types.ADD_DECK:
      return { ...state, [action.deckName]:{ title: action.deckName, questions:[] } }
    case types.ADD_QUESTION:
      state[action.title].questions.push(action.NewQuestion)
      return { ...state }
    default:
      return state
  }
}
