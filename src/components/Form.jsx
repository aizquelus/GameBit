import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { Flex, Button, Box, Input, Heading } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ModalComponent from './ModalComponent'

const Form = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { setCart } = useContext(CartContext)

    const [clientName, setClientName] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))

        e.target[0].value = ""
        e.target[1].value = ""
        setIsLoading(true)

        onOpen()
    }

    const handleCloseModal = () => {
        onClose()
        setCart([])
    }

    const order = {
        clientName,
        clientEmail
    }

    const ordersCollection = collection(db, "AllOrders")

    return (
        <>
            <Box className='form-container'>
                <Heading size="lg">You're almost done!</Heading>
                <p>Fill the form to finish your order</p>
                <form action="" onSubmit={handleSubmit}>
                    <Flex direction="column">
                        <Input mb="10px" placeholder="Name" onChange={(e) => setClientName(e.target.value)} required />
                        <Input mb="10px" type="email" placeholder="Email" onChange={(e) => setClientEmail(e.target.value)} required />
                    </Flex>

                    <Button isLoading={isLoading} type="submit" color="#fff" bg='#56008f' _hover={{ bg: '#6f319b' }} size='lg'>Finish Order</Button>
                </form>

            </Box>

            {orderId && <ModalComponent isOpen={isOpen} orderId={orderId} handleCloseModal={handleCloseModal} />}
        </>


    )
}

export default Form