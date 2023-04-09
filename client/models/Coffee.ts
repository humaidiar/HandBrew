export interface CoffeeBrewData {
  name: string
  url: string
  selftext: string
}

export interface CoffeeData extends CoffeeBrewData {
  id: number
}
