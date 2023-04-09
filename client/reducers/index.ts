import { combineReducers } from 'redux'
import coffeeReducer from './allCoffee'
import errorState from './errorMessage'
import loading from './loading'

// import stuff from './stuff'

export default combineReducers({
  coffeeReducer,
  errorState,
  loading,

  // stuff
})
