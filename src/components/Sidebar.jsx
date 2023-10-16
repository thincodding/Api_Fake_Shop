import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext';
import { IoMdArrowForward } from 'react-icons/io'
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';




const Sidebar = () => {

    const { isOpen, handleClose } = useContext(SidebarContext)

    const {cart} = useContext(CartContext)

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} px-4 w-full bg-white fixed top-0 h-full shadow-2xl md:w-[70%] xl:max-w-[30vw] transition-all duration-300`}>
            <div className='flex justify-between items-center py-6 font-semibold uppercase border-b'>
                <div>
                    <p>Your shoppping is (0)</p>
                </div>
                <div onClick={handleClose} className='text-2xl cursor-pointer'>
                    <IoMdArrowForward/>
                </div>
            </div>
            <div>
                {/* for test cart */}
                {/* {cart.map(item => {
                    return <div>{item.title}</div>
                })} */}

                {cart.map((item) => {
                    return  <CartItem item={item} key={item.id}/>
                })}

            </div>
        </div>
    )
};

export default Sidebar