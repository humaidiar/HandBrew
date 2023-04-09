import { CoffeeAction } from '../actions/getCoffee'
import { CoffeeData } from '../models/Coffee'

const initialState = [] as CoffeeData[]

export default function coffeeReducer(
  state = initialState,
  action: CoffeeAction
): CoffeeData[] {
  const { type, payload } = action

  switch (type) {
    case 'SET_COFFEE':
      return payload
    case 'ADD_COFFEE':
      return [...state, payload]
    case 'UPDATE_COFFEE':
      return state.map((data) => (data.id === payload.id ? payload : data))
    case 'DELETE_COFFEE':
      return state.filter((data) => data.id !== payload)
    default:
      return state
  }
}
