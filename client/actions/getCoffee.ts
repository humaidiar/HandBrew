import type { ThunkAction } from '../store'
import { CoffeeData } from '../models/Coffee'

import {
  getAllCoffee,
  addCoffeeApi,
  updateCoffeeApi,
  deleteCoffeeApi,
} from '../apiClient'

export type CoffeeAction =
  | { type: 'ADD_COFFEE'; payload: CoffeeData }
  | { type: 'SET_COFFEE'; payload: CoffeeData[] }
  | { type: 'UPDATE_COFFEE'; payload: CoffeeData }
  | { type: 'DELETE_COFFEE'; payload: number }
  | { type: 'SHOW_ERROR'; payload: string }

export function requestCoffee(newCoffee: CoffeeData): CoffeeAction {
  return {
    type: 'ADD_COFFEE',
    payload: newCoffee,
  }
}

export function receiveCoffee(coffee: CoffeeData[]): CoffeeAction {
  return {
    type: 'SET_COFFEE',
    payload: coffee,
  }
}

export function deleteCoffeeItem(deleteId: number): CoffeeAction {
  return {
    type: 'DELETE_COFFEE',
    payload: deleteId,
  }
}

export function updateCoffeeItem(updateData: CoffeeData): CoffeeAction {
  return {
    type: 'UPDATE_COFFEE',
    payload: updateData,
  }
}

export function showError(errorMessage: string): CoffeeAction {
  return {
    type: 'SHOW_ERROR',
    payload: errorMessage,
  }
}

// Fetching to Database

export function fetchSetCoffee(): ThunkAction {
  return (dispatch) => {
    return getAllCoffee()
      .then((coffee) => {
        dispatch(receiveCoffee(coffee))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchAddCoffee(newMethod: CoffeeData): ThunkAction {
  return (dispatch) => {
    return addCoffeeApi(newMethod)
      .then((method) => {
        dispatch(requestCoffee(method))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchDelCoffee(method_id: number): ThunkAction {
  return (dispatch) => {
    return deleteCoffeeApi(method_id)
      .then(() => {
        dispatch(deleteCoffeeItem(method_id))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}

export function fetchUpdateCoffee(id: number, update_method: CoffeeData): ThunkAction {
  return (dispatch) => {
    return updateCoffeeApi(id,update_method)
      .then((method) => {
        dispatch(updateCoffeeItem(method))
      })
      .catch((err) => {
        dispatch(showError(err.message))
      })
  }
}
