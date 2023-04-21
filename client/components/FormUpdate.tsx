import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { fetchSetCoffee, fetchUpdateCoffee } from '../actions/getCoffee'
import { CoffeeData } from '../models/Coffee'
import ReactDOM from 'react-dom'

interface Props {
  coffee: CoffeeData
  onClose: () => void
}

export default function UpdateForm({ coffee, onClose }: Props) {
  const dispatch = useAppDispatch()
  const id = coffee.id
  const [updatedCoffee, setUpdatedCoffee] = useState({
    name: coffee.name,
    url: coffee.url,
    selftext: coffee.selftext,
  } as CoffeeData)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUpdatedCoffee({
      ...updatedCoffee,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(fetchUpdateCoffee(id, updatedCoffee))
      .then(() => {
        dispatch(fetchSetCoffee())
        onClose()
      })
      .catch((err) => err.message)
  }

  const portalElement = document.getElementById('portal')
  return portalElement
    ? ReactDOM.createPortal(
        <div className="backdrop-update">
          <div className="form-update">
            <form onSubmit={handleSubmit}>
              <div className="close-container">
                <h2>Update Information</h2>
                <button
                  className="button-close"
                  type="button"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
              <label htmlFor="name">Method Name</label>
              <input
                name="name"
                id="name"
                type="text"
                value={updatedCoffee.name}
                onChange={handleChange}
                placeholder={coffee.name}
                required
              />
              <label htmlFor="url">Image Url </label>
              <input
                name="url"
                id="url"
                type="text"
                value={updatedCoffee.url}
                onChange={handleChange}
                placeholder="ex:https://images...."
                required
              />
              <label htmlFor="selftext">Short Description </label>
              <textarea
                name="selftext"
                id="selftext"
                value={updatedCoffee.selftext}
                className="text-input"
                onChange={handleChange}
                placeholder="Edit your text"
                required
              />
              <div className="button-group-update">
                <button className="button-update" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>,
        portalElement
      )
    : null
}
