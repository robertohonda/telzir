import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer from '../reducers'

const middleware = []

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
