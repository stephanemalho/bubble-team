import { toppings } from "./toppingConfig"
import Topping from "./Topping"

function ToppingList() {

  const handleClick = (name: string) => {
    console.log("Clicked", name)
  }

  return (
    <>
      {toppings.map((topping) => (
        <Topping key={topping.id} {...topping} onClick={() => handleClick(topping.name)}/>
      ))}
    </>
  )
}

export default ToppingList