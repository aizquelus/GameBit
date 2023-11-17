import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartProvider from './context/CartContext'
import Footer from './components/Footer'
import ScrollToTopBtn from './components/ScrollToTopBtn'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
      <ScrollToTopBtn/>
    </>
  )
}

export default App
