import { useState, useContext } from "react"
import { CartContext } from '../context/CartContext'
import { Center, Button, Box, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Checkout from "./Checkout"

const Cart = () => {

  const { cart, removeList, deleteItem } = useContext(CartContext)

  return (
    <Center minH='70vh' flexDirection="column" p="5%" justifyContent={cart.length > 0 ? "flex-start" : "center"} alignItems={cart.length > 0 ? "flex-start" : "center"}>
      
          {cart.length > 0 && <Flex display="flex" alignItems="center" w="100%" className="container"><Checkout /></Flex>}
      
      <Flex alignItems={cart.length > 0 ? "flex-end" : "center"} flexDirection={cart.length > 0 ? "row" : "column"} className="cart-btns">
          {
          cart.length > 0 ? <Button color="#fff" bg='#56008f' _hover={{ bg: '#6f319b' }} size='lg' onClick={removeList} mr="10px">Clear Cart</Button> : <Text mb="10px">Your shopping cart is empty.</Text>
          }

        <Link to={'/'}>
          <Button color='#fff' bg='#56008f' _hover={{ bg: '#6f319b'}} size='lg'>{cart.length > 0 ? "Continue shopping" : "Go back to store"}</Button>
        </Link>
        </Flex>


    </Center>
  )
}

export default Cart
