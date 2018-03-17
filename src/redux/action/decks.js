import types from '../config/types'

export const AddDeck = (deckName) => {
  return {
    type:types.GET_DATA,
    deckName
  }
}