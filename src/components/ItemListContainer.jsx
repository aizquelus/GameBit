import { Text, Flex } from "@chakra-ui/react"

const ItemListContainer = ({greeting}) => {
    return (
        <Flex h="80vh" alignItems="center" justifyContent="center">
            <Text textAlign="center">
                {greeting}
            </Text>
        </Flex>
    )
}

export default ItemListContainer