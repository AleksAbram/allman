import { combineReducers } from 'redux'
import basketReducer from './basketReducer'
import itemReducer from './itemReducer'
import { userReducer } from './userReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  item: itemReducer,
  basket: basketReducer,
})
