import ItemCount from './ItemCount';
import { Box, Flex, Heading, Text, Image, Spacer, Badge } from "@chakra-ui/react"

const ItemDetail = ({ item }) => {

    const { id, title, description, stock, price, image } = item

    return (
        <Flex key={id} maxW="1480px" className='detail-container'>
            <Box w="48%">
                <Image
                    className='img-detail'
                    objectFit='cover'
                    w="100%"
                    src={`${image}`}
                    fallbackSrc='https://via.placeholder.com/690x460'
                    alt={`${title}`}
                    title={`${title}`}
                />
            </Box>
            <Spacer />
            <Box w="48%">
                <Flex className='flex-container' direction="column" justify="space-between" h="100%">

                    <Heading size='3xl'>{title}</Heading>
                    <Text fontSize='3xl'>${price}</Text>
                    <Text>{description}</Text>
                    <Spacer />
                    {
                        stock <= 0 ? <Badge colorScheme='red' textAlign="center" p="10px" opacity="0.9" fontSize="lg" borderRadius="5px" border="1px solid #ef777799">Sold Out</Badge> : <ItemCount item={item} initial={0} />
                    }
                </Flex>
            </Box>
        </Flex>
    )
}

export default ItemDetail
