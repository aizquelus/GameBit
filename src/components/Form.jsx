import { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { Flex, Button, Box, Input, Heading, Text, Spacer, FormErrorMessage, FormHelperText, FormControl } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ModalComponent from './ModalComponent'

const Form = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { cart, setCart, calcTotalPrice } = useContext(CartContext)

    const [formData, setFormData] = useState({
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        confirmEmail: ""
    });

    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const db = getFirestore()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setIsValidEmail(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.clientEmail !== formData.confirmEmail) {
            setIsValidEmail(false);
            return;
        }

        setIsLoading(true);

        try {
            const docRef = await addDoc(ordersCollection, order);
            setOrderId(docRef.id);
            onOpen();
        } catch (error) {
            console.error("Error creating order:", error);
        } finally {
            setFormData({
                clientName: "",
                clientEmail: "",
                clientPhone: "",
                confirmEmail: ""
            });
        }
    };

    const handleCloseModal = () => {
        onClose()
        setCart([])
    }

    const [isValidEmail, setIsValidEmail] = useState(true);

    const order = {
        buyer: formData,
        items: cart.map(e => ({ title: e.title, qty: e.qty, price: e.price * e.qty })),
        total: calcTotalPrice(cart)
    }

    const ordersCollection = collection(db, "AllOrders")

    return (
        <>
            <Box className='form-container'>
                <Heading size="lg">You're almost done!</Heading>
                <p>Fill the form to finish your order</p>
                <form action="" onSubmit={handleSubmit}>
                    <Flex direction="column">
                        <Input mb="10px" name='clientName' placeholder="Name" onChange={handleChange} required />
                        <FormControl isInvalid={!isValidEmail}>
                            <Input mb="10px" id="email" name="clientEmail" type="email" placeholder="Email" onChange={handleChange} required />
                            <Input mb="5px" id="confirm-email" name="confirmEmail" type="email" placeholder="Confirm Email" onChange={handleChange} required />
                            {isValidEmail ? (
                                <FormHelperText mt="0" mb="10px" pl="5px">Emails must match.</FormHelperText>
                            ) : (
                                <FormErrorMessage mt="0" mb="10px" pl="5px">Emails do not match.</FormErrorMessage>
                            )}
                        </FormControl>
                        <Input mb="10px" name="clientPhone" type="number" placeholder="Phone Number" onChange={handleChange} required />
                    </Flex>

                    <Button isLoading={isLoading} type="submit" color="#fff" bg='#56008f' _hover={{ bg: '#6f319b' }} size='lg'>Finish Order</Button>
                </form>

            </Box>

            {orderId && <ModalComponent isOpen={isOpen} orderId={orderId} handleCloseModal={handleCloseModal} />}
        </>


    )
}

export default Form