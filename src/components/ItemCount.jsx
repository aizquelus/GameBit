import { Button, Flex, Center, Text, Box } from "@chakra-ui/react"
import { useState, useContext } from "react"
import { CartContext } from '../context/CartContext'
import { useToast } from '@chakra-ui/react'
const ItemCount = ({ item, initial }) => {

    const toast = useToast()

    const { addItem } = useContext(CartContext)

    const [count, setCounter] = useState(initial);

    const onAdd = () => {
        if (count !== 0) {
            addItem(item, count);
            setCounter(initial)
            toast({
                title: `Added to cart! `,
                description: `${count} ${item.title}${count == 1 ? " has" : "s have"} been added to your cart!`,
                status: 'success',
                duration: 5000,
                position: "top",
                isClosable: true
            })
        }
    }

    return (
        <Flex direction="column" className='flex-container'>
            <Box>
                <Text fontSize="2xl" mt="30px" mb="10px">Amount</Text>
                <Flex textAlign="center" className="qty-wrapper">
                    <Button isDisabled={count == 0} color="#fff" bg='#222' size='sm' _hover={{ bg: '#444444' }} onClick={() => { count > 0 && setCounter(count - 1) }}>-</Button>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Text display="inline-block" size='sm'>{count}</Text>
                    </Box>
                    <Button color="#fff" bg='#222' size='sm' _hover={{ bg: '#444444' }} onClick={() => { setCounter(count + 1) }}>+</Button>
                </Flex>
            </Box>
            <Button isDisabled={count == 0} color="#fff" bg='#222' display="block" _hover={{ bg: '#444444' }} onClick={onAdd}>Add to Cart</Button>
        </Flex>

    )
}

export default ItemCount
