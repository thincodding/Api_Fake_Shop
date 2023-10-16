import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    // For add to cart condition1
 
    // const addTocart = (product, id) => {
    //     console.log(`${product.title}Added to cartd`)
    // }

    //condition 2

    // const addTocart = (product, id) => {
    //     const newItem = {...product, amount: 1};
    //     console.log(newItem)
    // }

    // condition 3
    const addTocart = (product, id) => {
        const newItem = {...product, amount: 1};
        const cartItem = cart.find((item) => {
            return item.id === id
        });
        if(cartItem){
            const newCart = [...cart].map(item =>{
                if(item.id === id){
                    return {...item, amount: cartItem.amount + 1};
                }else{
                    return item;
                }
            });
            setCart(newCart);
        }else{
            setCart([...cart, newItem])
        };
    };

    //console.log(cart)
    //end add to cart

    //increase cart shopping 0 in header 
    const [itemAmount, setItemAmount] = useState(0)
    //update item amount and increate cart 0
    useEffect(()=>{
        if(cart){
            const amount = cart.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.amount;
            }, 0);
            setItemAmount(amount);
        }
    })
    // cart shopping 0

  return (
    <CartContext.Provider value={{cart, addTocart, itemAmount }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider