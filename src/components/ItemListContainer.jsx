import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Loader from "./Loader"

const ItemListContainer = () => {

    const { categoryId } = useParams();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const db = getFirestore()

        const itemsCollection = collection(db, "consolas")

        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setItems(docs)
            setLoading(false)
        })

    }, [])

    const filterByCategory = items.filter((i) => i.category == categoryId);

    if (loading) {
        return <Loader />
    }

    return (
        <div className="products-body">
            <ItemList items={!categoryId ? items : filterByCategory}></ItemList>
        </div>
    )
}

export default ItemListContainer

