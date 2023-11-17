import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Box, Card, Image, CardBody, Heading, Stack, Flex, Tooltip, Text, IconButton, Spacer, NumberInput, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

const Brief = () => {

    const { cart, setCart, deleteItem, calcTotalPrice, updateCartItemQty } = useContext(CartContext)

    return (
        <Flex direction="column" width="70%" className='flex-container'>
            {
                cart.map(item => {
                    const { id, image, title, price, qty: itemQty } = item
                    return (
                        <Box key={id} mb="20px">
                            <Card
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                            >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={`${image}`}
                                    fallbackSrc='https://via.placeholder.com/200x160'
                                    alt={`${title}`}
                                />
                                <Stack>
                                    <CardBody>
                                        <Heading size='lg'>{title}</Heading>

                                        <Text py='2' >
                                            ${price * itemQty}
                                        </Text>
                                        <NumberInput
                                            size='lg'
                                            maxW={20}
                                            defaultValue={itemQty}
                                            min={1}
                                        >
                                            <Box border="1px solid #a7a7a7" pl="5px" borderRadius="5px">
                                                <Text>{itemQty}</Text>
                                            </Box>
                                            <NumberInputStepper>
                                                <NumberIncrementStepper
                                                    onClick={() => {
                                                        setCart(prevState => updateCartItemQty(prevState, id, 1, "increment"))
                                                    }}
                                                />
                                                <NumberDecrementStepper onClick={() => {
                                                    if (itemQty > 1) {
                                                        setCart(prevState => updateCartItemQty(prevState, id, 1, "decrement"))
                                                    }
                                                }} />
                                            </NumberInputStepper>
                                        </NumberInput>
                                    </CardBody>
                                </Stack>
                                <Spacer />
                                <Tooltip label="Delete Product" aria-label='Delete product button'>
                                    <IconButton
                                        size='lg'
                                        icon={<DeleteIcon />}
                                        onClick={() => { deleteItem(id) }}
                                    />
                                </Tooltip>
                            </Card>
                        </Box>
                    )
                })
            }
            <Box>
                <Heading textAlign="right" size="lg">
                    Subtotal: ${calcTotalPrice(cart)}
                </Heading>
            </Box>
        </Flex>
    )
}

export default Brief