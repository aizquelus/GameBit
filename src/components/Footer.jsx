import { Box, Flex, Image, Text, Spacer, HStack, Button } from '@chakra-ui/react'

const Footer = () => {
    return (
        <footer>
            <Flex px="5%" py="3%" minH="15vh" justify="flex-end" direction="column">
                <Flex justify="space-between" pb="15px">
                    <Image className="logo" src="/img/gamebit-logo-text.png" alt="GameBit Logo" maxW="150px" />
                    <Spacer />
                    <HStack>
                        <Button colorScheme='facebook' >
                            Facebook
                        </Button>
                        <Button colorScheme='twitter'>
                            Twitter
                        </Button>
                    </HStack>
                </Flex>

                <Box>
                    <Text fontSize="lg" textAlign="center">© 2023 Gamebit. All rights reserved.</Text>
                </Box>
            </Flex>
        </footer>
    )
}

export default Footer