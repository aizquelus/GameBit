import Brief from './Brief'
import Form from './Form'
import { Center } from '@chakra-ui/react'

const Checkout = () => {
    return (
        <Center h="100%" w="100%" className='checkout-container'>
            <Brief></Brief>
            <Form></Form>
        </Center>
    )
}

export default Checkout