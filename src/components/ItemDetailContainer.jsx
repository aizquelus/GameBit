import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";
import { IconButton, Flex } from '@chakra-ui/react'
import { ArrowBackIcon } from "@chakra-ui/icons";


const ItemDetailContainer = () => {

    const { id } = useParams()

    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const db = getFirestore()

        const oneItem = doc(db, "consolas", `${id}`)

        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const docs = snapshot.data()
                setItem(docs)
                setLoading(false)
            }
        })

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
            {item && <ItemDetail item={item} />}
        </Flex>
    )
}

export default ItemDetailContainer
