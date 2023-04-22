import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { fetchAddCoffee, fetchSetCoffee } from '../actions/getCoffee'
import { CoffeeData } from '../models/Coffee'
import * as Base64 from 'base64-arraybuffer'

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

  const [fileName, setFileName] = useState<string>('')

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
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setFileName(file.name)
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload = () => {
        setCoffeeData((prevCoffeeData) => ({
          ...prevCoffeeData,
          data: {
            ...prevCoffeeData.data,
            url: Base64.encode(reader.result as ArrayBuffer),
          },
        }))
      }
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(fetchAddCoffee(coffeeData.data))
      .then(() => {
        setTimeout(() => {
          dispatch(fetchSetCoffee())
        }, 2000)
      })
      .catch((err) => err.message)
    setCoffeeData({
      ...coffeeData,
      data: dataEmpty,
    })
    setFileName('')
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
        <label htmlFor="selftext">Short Description </label>
        <textarea
          name="selftext"
          value={coffeeData.data.selftext}
          className="text-input"
          onChange={handleChange}
          placeholder="Max 20 words"
          required
        />
        <label htmlFor="url" className="minimalist-button">
          {fileName || 'Upload Photo'}
        </label>
        <input id="url" type="file" onChange={updateFile} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddMethodForm
