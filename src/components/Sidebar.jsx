import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io'
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi'



const Sidebar = () => {

    const { isOpen, handleClose } = useContext(SidebarContext)

    const { cart,clearCart, total, itemAmount } = useContext(CartContext)

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} px-4 w-full bg-white fixed top-0 h-full shadow-2xl md:w-[70%]   xl:max-w-[25vw] transition-all duration-300`}>
            <div className='flex justify-between items-center py-6 font-semibold uppercase border-b'>
                <div>
                    <p className='font-bold'>Your shoppping is ({itemAmount})</p>
                </div>
                <div onClick={handleClose} className='text-2xl cursor-pointer'>
                    <IoMdArrowForward />
                </div>
            </div>
            <div className='flex flex-col h-[520px] overflow-hidden overflow-y-auto border-b'>
                {/* for test cart */}
                {/* {cart.map(item => {
                    return <div>{item.title}</div>
                })} */}

                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />
                })}
            </div>
            {/* for detail */}

            <div className='flex flex-col gap-y-3 py-4 mt-4'>
                <div className='flex w-full justify-between items-center'>
                    <div>
                        <span className='font-bold text-2xl'>TOTAL:  $ { parseFloat(total).toFixed(2)}</span>
                    </div>
                    <div onClick={() => clearCart()} className='w-12 h-12 bg-red-500 flex justify-center items-center cursor-pointer hover:bg-red-400 transition-all duration-300 rounded-full'>
                        <FiTrash2 className='text-white'/>
                    </div>
                </div>

                <Link to={'/'} className='bg-blue-600 py-4 mt-5 flex justify-center items-center text-1xl text-white font-bold rounded-md hover:bg-blue-700 transition-all duration-300'>View Cart</Link>
                <Link to={'/'} className='bg-red-600 py-4 flex justify-center items-center text-1xl text-white font-bold rounded-md hover:bg-red-700 transition-all duration-300'>Check Out</Link>

            </div>

        </div>
    )
};

export default Sidebar