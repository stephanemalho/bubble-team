import { toppings } from "./toppingConfig"
import Topping from "./Topping"

function ToppingList() {
  return (
    <>
      {toppings.map((topping) => (
        <Topping key={topping.id} {...topping} />
      ))}
    </>
  )
}

export default ToppingList