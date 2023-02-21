import { useShoppingCart } from "../../stores/useShoppingCart"

function ShoppingCart() {
  const { cart } = useShoppingCart((state) => state.cart)
  console.log(cart)

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {/* {
          cart.map((item, index) => (
            <div key={index}>
              <h3>Product ID: {item[0]}</h3>
              <h3>Amount: {item[1]}</h3>
            </div>
          ))
        } */}
      </ul>
    </div>
  )
}

export default ShoppingCart