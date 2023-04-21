import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { fetchAddCoffee, fetchSetCoffee } from '../actions/getCoffee'
import { CoffeeData } from '../models/Coffee'

function AddMethodForm() {
  const dispatch = useAppDispatch()

  const dataEmpty = {
    name: '',
    url: '',
    selftext: '',
  } as CoffeeData

  const [coffeeData, setCoffeeData] = useState<{
    image: object
    data: CoffeeData
  }>({ image: {}, data: dataEmpty })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setCoffeeData((prevCoffeeData) => ({
      ...prevCoffeeData,
      data: {
        ...prevCoffeeData.data,
        [name]: value,
      },
    }))
  }

  const updateFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileArr = e.target.files as FileList
    const file = fileArr[0]
    setCoffeeData((prevCoffeeData) => ({
      ...prevCoffeeData,
      image: file, // Update the image property with the new File object
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(fetchAddCoffee(coffeeData.data))
      .then(() => {
        setTimeout(() => {
          dispatch(fetchSetCoffee())
        }, 1800)
      })
      .catch((err) => err.message)
    setCoffeeData({
      ...coffeeData,
      data: dataEmpty,
    })
  }

  return (
    <div className="form-add">
      <form onSubmit={handleSubmit}>
        <h1>Share with us a new brewing technique</h1>
        <label htmlFor="name">Method Name</label>
        <input
          name="name"
          type="text"
          value={coffeeData.data.name}
          onChange={handleChange}
          placeholder="Your badass brew method"
          required
        />
        <label htmlFor="url">Image Url </label>
        <input
          name="url"
          type="text"
          value={coffeeData.data.url}
          onChange={handleChange}
          placeholder="ex:https://images...."
          required
        />
        <label htmlFor="selftext">Short Description </label>
        <textarea
          name="selftext"
          value={coffeeData.data.selftext}
          className="text-input"
          onChange={handleChange}
          placeholder="Max 20 words"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddMethodForm
