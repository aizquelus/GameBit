import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react"


const ItemDetailContainer = () => {


    const showProducts = new Promise((resolve, reject)=> {

        const items = [
            {id: 0, title: "PS2", description: "Experience gaming nostalgia with the iconic PlayStation 2, a classic console known for its vast game library and entertainment features.", price: 120, stock: 4, category: "sony"},
            {id: 1, title: "PS4", description: "Immerse yourself in the world of cutting-edge gaming with the PlayStation 4, delivering stunning graphics and a wide range of games.", price: 125, stock: 3, category: "sony"},
            {id: 2, title: "Nintendo 64", description: "Relive the '90s with the Nintendo 64, a beloved console famous for its innovative 3D gaming experiences and memorable titles.", price: 130, stock: 5, category: "nintendo"},
            {id: 3, title: "SNES", description: "Step back in time to the golden age of gaming with the SNES, a legendary console featuring timeless classics.", price: 135, stock: 7, category: "nintendo"},
            {id: 4, title: "Xbox", description: "Discover the power of Xbox, a gaming powerhouse offering high-quality visuals and a world of gaming possibilities.", price: 140, stock: 9, category: "microsoft"},
            {id: 5, title: "Xbox One", description: "Elevate your gaming experience with the Xbox One, packed with incredible games and multimedia features.", price: 145, stock: 2, category: "microsoft"},
            {id: 6, title: "PSP", description: "Game on the go with the PSP, a portable gaming device that brings console-quality gaming to your fingertips.", price: 140, stock: 9, category: "portables"},
            {id: 7, title: "PS Vita", description: "Experience gaming excellence with the PS Vita, a handheld console offering a vast library of games and impressive graphics.", price: 145, stock: 2, category: "portables"}
        ]
        
        if(items.length != 0) {
            setTimeout(()=>{
                resolve(items);
            }, 1000)
        } else {
            reject("Error");
        }
    })
    
    const [items, setItems] = useState([]);

    useEffect(()=>{

        showProducts
        .then((items)=> setItems(items))
        .catch((e)=> {
            console.error(e)
        });
    }, [])

    return (
        <div className="products-body">
            <ItemDetail
                items={items}
            />
        </div>
    )
}

export default ItemDetailContainer