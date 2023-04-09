import { useState } from 'react'
import * as Models from '../../models/Widget'
import { addWidgetsTool } from '../apiClient'

interface Props {
  onAdd: (widget: Models.Widget) => void
}

function WidgetForm({ onAdd }: Props) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [mfg, setMfg] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newWidget: Models.Widget = { name, price: parseFloat(price), mfg }
    addWidgetsTool(newWidget)
      .then((newitem) => {
        onAdd(newitem)
        setName('')
        setPrice('')
        setMfg('')
      })
      .catch((err) => alert(err.message))
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Manufacturer:
        <input
          type="text"
          value={mfg}
          onChange={(e) => setMfg(e.target.value)}
        />
      </label>
      <button type="submit">Add Widget</button>
    </form>
  )
}

export default WidgetForm
