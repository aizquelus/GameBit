import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = id => cart.some(e => e.id == id)


    const updateCartItemQty = (prevCart, itemId, quantity, operation) => {
        return prevCart.map(cartItem => {
            if (cartItem.id == itemId) {
                if (operation === "increment") {
                    return { ...cartItem, qty: cartItem.qty + quantity };
                } else if (operation === "decrement" && cartItem.qty > 1) {
                    return { ...cartItem, qty: cartItem.qty - quantity };
                }
            } else {
                return cartItem;
            }
            
        });
    };

    const calcItemsQty = arr => {
        const itemsQty = arr.reduce((acc, item) => {
            return acc + item.qty
        }, 0)

        return itemsQty
    }

    const calcTotalPrice = arr => {
        const totalPrice = arr.reduce((acc, item) => {

            const priceItem = item.price * item.qty

            return acc + priceItem
        }, 0)

        return totalPrice
    }

    const addItem = (item, qty) => {
        if (!isInCart(item.id)) {
            const newItem = {
                ...item,
                qty: qty
            }
            setCart(prevState => [...prevState, newItem])

        } else {
            setCart(prevState => updateCartItemQty(prevState, item.id, qty, "increment"))
        }

        
    }

    const removeList = () => {
        setCart([])
    }

    const deleteItem = (id) => {
        const foundItem = cart.find((e) => e.id == id)

        if (foundItem) {
            setCart(prevState => {
                return prevState.filter(cartItem => {
                    return cartItem.id != foundItem.id
                })
            })
        }

    }

    return (

        <CartContext.Provider value={{ cart, setCart, addItem, calcItemsQty, calcTotalPrice, removeList, deleteItem, updateCartItemQty }}>
            {children}
        </CartContext.Provider>

    )



}

export default CartProvider
