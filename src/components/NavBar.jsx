import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {

    const categories = ["Sony", "Nintendo", "Microsoft", "Portables"]

    return (
        <nav>
            <Flex px="5%" py="2%" h="15vh" alignItems="center" justifyContent="center">
                <Box>
                    <Link to={'/'}>
                        <img className="logo" src="/img/gamebit-logo.png" alt="GameBit Logo" />
                    </Link>
                </Box>
                <Spacer />
                <Box className='categories'>
                    <Menu>
                        <MenuButton>
                            Categories
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
