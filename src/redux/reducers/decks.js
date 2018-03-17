import types from '../config/types'

const INITIAL_STATE = [
  { title:'React', questions:[] },
  { title:'Node JS', questions:[] },
  { title:'Ruby on Rails', questions:[] },
]

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case types.GET_DATA:
      return [ ...state, { title: action.deckName, questions:[] } ]
    default:
      return state
  }
}