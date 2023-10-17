import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../contexts/CartContext'
import Product from './Product'



const CartItem = ({ item }) => {

    const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)

    const { id, title, image, price, amount } = item;

    return (
        <>
            {/* for test condition1
    <div>{item.title}</div> */}

            <div className='flex gap-x-4 lg:py-4 border-b border-gray-200'>
                <div className='min-h-[150px] w-full flex items-center gap-x-4 ml-10'>
                    <Link to={'/'}>
                        <img className='max-w-[80px] ' src={image} alt="" />
                    </Link>
                    <div className='flex flex-col w-full'>
                        <div className='flex justify-between items-center'>
                            <div>{title}</div>
                            <div onClick={() =>removeFromCart(id)} className='text-2xl'>
                                <IoMdClose  className='text-gray-500 hover:text-red-400 transition-all duration-300 cursor-pointer' />
                      
                            </div>
                        </div>
                        <div className='w-full gap-x-4 flex justify-between items-center'>
                            <div className='flex flex-1 max-w-[100px] h-full py-2 mt-5 items-center border'>
                                <div onClick={()=> decreaseAmount(id) }  className='flex flex-1 justify-center cursor-pointer'>
                                    <IoMdRemove/>
                                </div>
                                <div className='flex h-full justify-center items-center px-2'>{amount}</div>
                                <div onClick={()=> increaseAmount(id)} className='flex flex-1 justify-center items-center cursor-pointer'>
                                    <IoMdAdd/>
                                </div>            
                            </div>
                            <div className='font-bold mt-4 text-gray-500'>$ {price}</div>
                            <div className='mt-4'>$ {`${parseFloat(price * amount).toFixed(2)}`}</div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CartItem