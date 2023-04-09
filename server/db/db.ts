import { CoffeeData } from '../../client/models/Coffee'
import connection from './connection'

export function getCoffeeData(db = connection): Promise<CoffeeData[]> {
  return db('coffee').select()
}

export function addCoffeeData(
  newCoffee: CoffeeData,
  db = connection
): Promise<CoffeeData[]> {
  return db('coffee')
    .insert({
      name: newCoffee.name,
      url: newCoffee.url,
      selftext: newCoffee.selftext,
    })
    .returning(['id', 'name', 'url', 'selftext'])
}

export function updateCoffeeData(
  updateCoffee: CoffeeData,
  db = connection
): Promise<CoffeeData[]> {
  return db('coffee')
    .select()
    .where('coffee.id', updateCoffee.id)
    .first()
    .update({
      name: updateCoffee.name,
      url: updateCoffee.url,
      selftext: updateCoffee.selftext,
    })
    .returning(['id', 'name', 'selftext'])
}

export function deleteCoffeeData(id: number, db = connection): Promise<number> {
  return db('coffee')
    .where('coffee.id', id)
    .del()
    .then(() => {
      return db('coffee').delete().where('coffee.id', id)
    })
}
