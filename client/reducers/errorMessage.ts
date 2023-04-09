import { CoffeeAction } from '../actions/getCoffee'
export default function errorState(state = '', action: CoffeeAction): string {
  const { type } = action

  switch (type) {
    case 'SHOW_ERROR':
      return action.payload
    default:
      return state
  }
}
