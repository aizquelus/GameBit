import { Heading, Card, CardHeader, CardFooter, Button, Stack, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    const { id, title, image } = item;

    return (
        <Card w='sm' align='center' textAlign='center'>
            <Stack>
                <CardHeader>
                    <Image
                        w="400px"
                        h="200px"
                        mb="15px"
                        objectFit='cover'
                        src={`${image}`}
                        fallbackSrc='https://via.placeholder.com/350x200'
                        alt={`${title}`}
                    />
                    <Heading size='lg'>{title}</Heading>
                </CardHeader>
                <CardFooter justify="center">
                    <Link to={`/item/${id}`}>
                        <Button size="lg" bg="#56008f" color="#fff" _hover={{ bg: '#6f319b' }} mb="20px">See Details</Button>
                    </Link>
                </CardFooter>
            </Stack>
        </Card>
    )
}

export default Item
