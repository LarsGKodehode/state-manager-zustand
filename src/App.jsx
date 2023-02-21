import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import ShoppingCart from './routes/ShopingCart/ShopingCart'

function Layout() {
  return (
    <div>
      <header>
        <h1>Header</h1>

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/cart'>Cart</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h3>Footer</h3>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Layout />}>

          <Route index element={<LandingPage />} />
          <Route path='cart' element={<ShoppingCart />} />

        </Route>
      </Routes>
    </Router>
  )
}



export default App
