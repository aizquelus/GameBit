import React from 'react'
import Brief from './Brief'
import Form from './Form'
import { Center, Flex } from '@chakra-ui/react'

const Checkout = () => {
    return (
        <Center h="100%" w="100%" justifyContent="flex-start" className='checkout-container'>
            <Brief></Brief>
            <Form></Form>
        </Center>
    )
}

export default Checkout