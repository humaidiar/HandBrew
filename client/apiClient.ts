/* eslint-disable @typescript-eslint/no-unused-vars */
import { response } from 'express'
import request from 'superagent'
import { Widget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets(): Promise<Widget[]> {
  return request.get('/api/v1/widgets/').then((res) => res.body)
}

export function addWidgetsTool(): Promise<Widget> {
  return request
    .post(widgetUrl)
    .send()
    .then((res) => res.body)
}
