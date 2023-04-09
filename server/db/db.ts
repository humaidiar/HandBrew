import config from './knexfile'
import knex from 'knex'
import { Widget } from '../../models/Widget'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getWidgets(db = connection): Promise<Widget[]> {
  return db('widgets').select()
}

export function addWidgets(
  newWidget: Widget,
  db = connection
): Promise<Widget[]> {
  return db('widgets').insert(newWidget).returning(['id', 'price', 'mfg'])
}

export function delWidgets(id: number, db = connection): Promise<number> {
  return db('widgets').del().where('id', id)
}

export function updWidgets(
  newWidget: Widget,
  db = connection
): Promise<Widget[]> {
  return db('widgets')
    .select()
    .where('widgets.id', newWidget.id)
    .first()
    .update({
      name: newWidget.name,
      price: newWidget.price,
      mfg: newWidget.mfg,
    })
    .returning(['name', 'price', 'mfg'])
}
