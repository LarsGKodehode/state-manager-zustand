import { useShoppingCart } from "../stores/useShoppingCart"

function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>

      <Product name='Foobar' id={12} />
    </div>
  )
}

function Product(props) {
  const { name, id } = props
  const addToCart = useShoppingCart((state) => state.addToCart)

  return (
    <div>
      <h4>Product: {name}</h4>
      <button onClick={() => addToCart(id, 1)}>Add to Cart</button>
      <h5>product number: {id}</h5>
    </div>
  )
}

export default LandingPage