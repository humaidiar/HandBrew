import { CoffeeAction } from '../actions/getCoffee'

function loading(state = false, action: CoffeeAction): boolean {
  const { type } = action

  switch (type) {
    case 'ADD_COFFEE':
      return true
    case 'SET_COFFEE':
      return false
    default:
      return state
  }
}

export default loading
