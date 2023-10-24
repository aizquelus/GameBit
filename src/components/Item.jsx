import {  Heading, Card, CardHeader,  CardFooter, Button, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    const { id, title } = item;

    return (
            <Card w='sm' align='center' textAlign='center'>
                <Stack>
                    <CardHeader>
                        <p>Image</p>
                        <Heading size='md'>{title}</Heading>
                    </CardHeader>
                    <CardFooter>
                        <Link to={`/item/${id}`}>
                            <Button>See Details</Button>
                        </Link>
                    </CardFooter>
                </Stack>
            </Card>
    )
}

export default Item