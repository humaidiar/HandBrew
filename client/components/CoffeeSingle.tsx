import { CoffeeData } from '../models/Coffee'
import { fetchDelCoffee } from '../actions/getCoffee'
import { useAppDispatch } from '../hooks/redux'
import UpdateForm from './FormUpdate'
import { useState } from 'react'

interface Props {
  coffeeProp: CoffeeData
}

export default function SingleCoffee(props: Props) {
  const { id, name, url, selftext } = props.coffeeProp
  const dispatch = useAppDispatch()
  const [toggle, setToggle] = useState(false)
  //cut the words and joining the words => limiting words displaying on screen
  // const words = selftext.split(' ')
  // const limitedText = words.slice(0, 18).join(' ') + '...' //optinal
  // -------

  const handleClose = () => {
    setToggle(false)
  }
  return (
    <div className="card-front">
      <img className="img_size" src={url} alt={name} />
      <div className="card-body">
        <div className="title-card">
          <h2>{name}</h2>
        </div>
        <div className="card-text-bottom">
          <p>{selftext}</p>
          <div className="button-group">
            {toggle ? (
              <UpdateForm coffee={props.coffeeProp} onClose={handleClose} />
            ) : (
              <button
                onClick={() => {
                  setToggle(!toggle)
                }}
                className="button-card"
              >
                Update
              </button>
            )}
            <button
              onClick={() => dispatch(fetchDelCoffee(id))}
              className="button-card-delete"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
