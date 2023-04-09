import { useEffect, useState } from 'react'
import * as Models from '../../models/Widget'
// import { Widget } from '../../models/Widget'
import { addWidgetsTool, getWidgets } from '../apiClient'
import WidgetForm from './AddWidget'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  // const [formdata, setFormData] = useState([] as Models.Widget[])

  useEffect(() => {
    getWidgets()
      .then((all) => setWidgets(all))
      .catch((err) => alert(err.message))
  }, [widgets])

  const refreshAll = () => {
    getWidgets()
      .then((all) => setWidgets(all))
      .catch((err) => alert(err.message))
  }

  const handleAdd = (widget: Models.Widget) => {
    setWidgets([widget, ...widgets])
  }

  return (
    <div>
      <h1>Widgets suck!</h1>
      {/* <button onClick={handleAdd}>add Widget</button> */}
      <div>
        {widgets.map((widget) => (
          <p key={widget.id}>
            {widget.name} | ${widget.price} | {widget.mfg}
          </p>
        ))}
      </div>
      <button onClick={refreshAll}>Get All Widgets</button>
      <WidgetForm onAdd={handleAdd} />
    </div>
  )
}

export default App
