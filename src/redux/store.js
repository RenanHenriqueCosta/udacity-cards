import { createStore, compose, applyMiddleware } from 'redux'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'
import ReduxPromise from 'redux-promise'
import reducers from './reducers'

const store = createStore(reducers, undefined, compose(applyMiddleware(ReduxPromise), autoRehydrate()))
persistStore(store,{ storage: AsyncStorage })

export default store
