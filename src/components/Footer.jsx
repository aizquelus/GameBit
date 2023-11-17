import { Flex, Image, Text, HStack, Button } from '@chakra-ui/react'

const Footer = () => {
    return (
        <footer>
            <Flex px="5%" py="3%" minH="15vh" className='ftr-fst-child'>
                <Image className="logo" src="/img/gamebit-logo-text.png" alt="GameBit Logo" maxW="150px" display="inline-block" />
                <Text fontSize="lg" textAlign="center">© 2023 Gamebit. All rights reserved.</Text>
                <HStack>
                    <Button colorScheme='facebook' >
                        Facebook
                    </Button>
                    <Button colorScheme='twitter'>
                        Twitter
                    </Button>
                </HStack>
            </Flex>
        </footer>
    )
}

export default Footer