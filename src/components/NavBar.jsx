import CartWidget from './CartWidget'
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react'

const NavBar = () => {
    return (
        <Flex>
            <Box>
                <h1>Aizquel's E-Commerce</h1>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton>
                        Categorías
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Category 1</MenuItem>
                        <MenuItem>Category2</MenuItem>
                        <MenuItem>Category 3</MenuItem>
                        <MenuItem>Category 4</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box>
                <CartWidget/>
            </Box>
        </Flex>
    )
}

export default NavBar