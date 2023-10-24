import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount';
import { Center, Heading, Card, CardBody, CardFooter, Text, Stack, Image } from "@chakra-ui/react"

const ItemDetail = ({ items }) => {

    const { id } = useParams();

    const filteredItem = items.filter((i) => i.id == id);

    return (
        <Center>
            {
                filteredItem.map((i) => {
                    const { title, price, stock, description } = i;
                    return (

                            <Card
                                key={i.id}
                                direction = {{ base: 'column', md: 'row' }}
                                overflow = 'hidden'
                                variant = 'outline'
                                maxW='80vw'
                            >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', md: '200px' }}
                                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                                alt='Caffe Latte'
                            />

                            <Stack>
                                <CardBody>
                                    <Heading size='md'>{title}</Heading>
                                    <Text py='2'>{description}</Text>
                                    <Text>${price}</Text>
                                </CardBody>

                                <CardFooter alignItems='center' justifyContent='center'>
                                    <ItemCount stock={stock} initial={0} />
                                </CardFooter>
                            </Stack>
                        </Card>
                    )
                })
            }
        </Center>
    )
}

export default ItemDetail