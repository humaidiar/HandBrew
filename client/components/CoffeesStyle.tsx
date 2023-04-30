import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchSetCoffee } from '../actions/getCoffee'
import SingleCoffee from './CoffeeSingle'
import AddMethodForm from './FormCoffee'
import LoadingScreen from './LoadingScreen'
import FooterBar from './Footer'
import { motion } from 'framer-motion'

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
            .map((coffee, index) => (
              <motion.div
                transition={{ delay: 0.3 * index }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                key={coffee.id}
              >
                <SingleCoffee coffeeProp={coffee} />
              </motion.div>
            ))}
        </div>
      </div>
      <FooterBar />
      <LoadingScreen />
    </section>
  )
}
