import express from 'express'
import { CoffeeData } from '../../client/models/Coffee'
import {
  getCoffeeData,
  updateCoffeeData,
  addCoffeeData,
  deleteCoffeeData,
} from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getCoffeeData()
    .then((coffee) => {
      res.json(coffee)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const newCoffee = req.body
  addCoffeeData(newCoffee)
    .then((coffee) => res.json(coffee))
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const { name, url, selftext } = req.body
  const updateData = {
    id: Number(req.params.id),
    name: name,
    url: url,
    selftext: selftext,
  } as CoffeeData

  updateCoffeeData(updateData)
    .then((update) => res.json(update))
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  deleteCoffeeData(id)
    .then((coffee) => {
      res.json(coffee)
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
