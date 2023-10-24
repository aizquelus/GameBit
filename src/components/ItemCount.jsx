import { Button, Center } from "@chakra-ui/react"
import { useState } from "react"

const ItemCount = ({ stock, initial }) => {

    const [count, setCounter] = useState(initial);

    const increase = () => {
        count < stock ? setCounter(count + 1) : alert("Se ha superado el stock disponible para tu producto");
    }

    const decrease = () => {
        count > 0 ? setCounter(count - 1) : alert("La cantidad de productos no puede ser menor a 0!");
    }

    const onAdd = ()=> {
        if(stock == 0) {
            alert("De momento, no hay stock del producto.")
        } else {
            if(count !== 0){
                alert(`Agregaste ${count === 1 ? `1 producto` : `${count} productos`} al carrito!`)
            } else {
                alert(`Oops, parece que no hay productos qué agregar, por favor, indica una cantidad de productos válida.`)
            }
        }
    }
    

    return (
        <div>
            <Center>
                <Button color="#fff" bg='#56008f' size='sm' onClick={decrease}>-</Button>
                <p>{count}</p>
                <Button color="#fff" bg='#56008f' size='sm' onClick={increase}>+</Button>
            </Center>
            <div>
                <Button className="add-btn" color="#fff" bg='#56008f' size='sm' onClick={onAdd}>Agregar al carrito</Button>
            </div>
        </div>
        
    )
}

export default ItemCount