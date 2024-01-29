import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image, Text } from '@chakra-ui/react'

const NavBar = () => {

    const categories = ["Sony", "Nintendo", "Microsoft", "Portables"]

    return (
        <nav>
            <Flex px="5%" py="2%" h="15vh" alignItems="center" justifyContent="center">
                <Box>
                    <Link to={'/'}>
                        <Image className="logo" src="/img/gamebit-logo.png" alt="GameBit Logo" />
                    </Link>
                </Box>
                <Spacer />
                <Box className='categories'>
                    <Menu>
                        {({ isOpen }) => (
                            <>
                                <MenuButton>
                                    <Box display="flex" alignItems="center" gap="6px">
                                        <Text>Categories</Text>
                                        <Box marginTop="3px">
                                            {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="15" fill="currentColor"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="15" fill="currentColor"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>}
                                        </Box>
                                    </Box>
                                </MenuButton>

                                <MenuList color="#000">
                                    {categories.map((c, index) => {
                                        return (
                                            <Link to={`/category/${c.toLowerCase()}`} key={index}>
                                                <MenuItem>{c}</MenuItem>
                                            </Link>
                                        )
                                    })}
                                </MenuList>
                            </>
                        )}
                    </Menu>
                </Box>
                <Spacer />
                <Box>
                    <Link to={'/cart'}>
                        <CartWidget />
                    </Link>
                </Box>
            </Flex>
        </nav>
    )
}

export default NavBar
