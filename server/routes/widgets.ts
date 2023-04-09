import express from 'express'
import { delWidgets, getWidgets, addWidgets, updWidgets } from '../db/db'

const router = express.Router()

router.get('/', (req, res) => {
  getWidgets()
    .then((widgets) => {
      res.json(widgets)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const newWidget = req.body
  addWidgets(newWidget)
    .then((newWidget) => {
      res.json(newWidget)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  delWidgets(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const { name, price, mfg, inStock } = req.body
  const updateWidgets = {
    id: Number(req.params.id),
    name: name,
    price: price,
    mfg: mfg,
    inStock,
  }

  updWidgets(updateWidgets)
    .then((item) => {
      res.json(item)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
