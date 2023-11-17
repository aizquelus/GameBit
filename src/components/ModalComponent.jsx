import React from 'react'
import { Button, Text, Badge } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ModalComponent = ({orderId, isOpen, handleCloseModal}) => {

  return (
    <>
      <Modal isOpen={isOpen} size={'xl'} onClose={handleCloseModal} isCentered>
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px)'
        />
        <ModalContent alignItems="center">
          <ModalHeader>Thanks for shopping with GameBit!</ModalHeader>
          <ModalBody textAlign="center">
            <Text>Your Order ID is: <Badge variant='solid' colorScheme='green' fontSize="lg">{orderId}</Badge></Text>
            <Text>Come back soon!</Text>
          </ModalBody>

          <ModalFooter bg="#fff" borderBottomLeftRadius="5px" borderBottomRightRadius="5px">
            <Link to={'/'}>
              <Button color="#fff" bg='#56008f' size='md' onClick={handleCloseModal}>
                Finish Order
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalComponent