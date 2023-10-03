import { ChakraProvider } from '@chakra-ui/react'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  const greeting = "Hola! Mi nombre es Aizquel Urdaneta, bienvenido/a a mi e-commerce."
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App