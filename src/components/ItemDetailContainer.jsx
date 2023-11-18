import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import { IconButton, Flex, Center, Badge } from '@chakra-ui/react'
import { ArrowBackIcon } from "@chakra-ui/icons";


const ItemDetailContainer = () => {

    const { id } = useParams()

    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const oneItem = doc(db, "consolas", `${id}`)
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const docs = snapshot.data()
                setItem(docs)
            }
        })
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <Flex className="products-body" direction="column" justifyContent="flex-start" alignItems="flex-start">
            <Link to={'/'}>
                <IconButton
                    bg="#56008f"
                    color="#fff"
                    _hover={{ bg: '#6f319b' }}
                    size='lg'
                    icon={<ArrowBackIcon />}
                />

            </Link>
            {item ? <ItemDetail item={item} /> : <Center w="100%"><Badge colorScheme='red' textAlign="center" p="10px" opacity="0.9" fontSize="lg" borderRadius="5px" border="1px solid #ef777799">The product you're trying to look for does not exist! Please, go back to the catalog and try again.</Badge></Center>}
        </Flex>
    )
}

export default ItemDetailContainer
