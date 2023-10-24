import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <>
            {items.map((i)=>{
                return(
                    <Item 
                        key={i.id} 
                        item={i}
                    />
                )
            })}
        </>
    )
}

export default ItemList