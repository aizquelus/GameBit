import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <nav>
            <Flex px="5%" py="2%" h="15vh" alignItems="center" justifyContent="center">
            <Box>
                <img className="logo" src="/img/gamebit-logo.png" alt="GameBit Logo" />
            </Box>
            <Spacer />
            <Box className='categories'>
                <Menu>
                    <MenuButton>
                        Categorías
                    </MenuButton>
                    <MenuList color="#000">
                        <MenuItem>Sony</MenuItem>
                        <MenuItem>Nintendo</MenuItem>
                        <MenuItem>Microsoft</MenuItem>
                        <MenuItem>Portátiles</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box>
                <CartWidget/>
            </Box>
        </Flex>
        </nav>
    )
}

export default NavBar