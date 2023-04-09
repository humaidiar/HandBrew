import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchSetCoffee } from '../actions/getCoffee'
import SingleCoffee from './CoffeeSingle'
import AddMethodForm from './FormCoffee'
import LoadingScreen from './LoadingScreen'
import FooterBar from './Footer'

export default function AllCoffee() {
  const dispatch = useAppDispatch()
  const coffees = useAppSelector((state) => state.coffeeReducer)

  useEffect(() => {
    dispatch(fetchSetCoffee())
  }, [dispatch])

  return (
    <section>
      <div className="container">
        <div className="form-wrapper">
          <AddMethodForm />
        </div>
        <div className="card-list">
          {coffees
            .slice()
            .reverse()
            .map((coffee) => (
              <div key={coffee.id}>
                <SingleCoffee coffeeProp={coffee} />
              </div>
            ))}
        </div>
      </div>
      <FooterBar />
      <LoadingScreen />
    </section>
  )
}
