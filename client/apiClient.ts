import request from 'superagent'
import { CoffeeData } from './models/Coffee'

export function getAllCoffee(): Promise<CoffeeData[]> {
  return request.get('/api/v1/coffee').then((res) => res.body)
}

export function addCoffeeApi(newCoffee: CoffeeData): Promise<CoffeeData> {
  return request
    .post('/api/v1/coffee')
    .send(newCoffee)
    .then((res) => {
      return res.body
    })
}

export function updateCoffeeApi(
  id: number,
  newcoffee: CoffeeData
): Promise<CoffeeData> {
  return request
    .patch(`/api/v1/coffee/${id}`)
    .send(newcoffee)
    .then((res) => {
      return res.body
    })
}

export function deleteCoffeeApi(coffeeId: number): Promise<number> {
  return request.del(`/api/v1/coffee/${coffeeId}`).then((res) => res.body)
}
