import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
import {BsBag} from 'react-icons/bs'
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const {isOpen, setIsOpen} = useContext(SidebarContext)

    const {itemAmount} = useContext(CartContext)



  return (
    <div className=''>
        <div className='flex mx-auto container justify-between items-center h-full p-5'>
            <Link to={'/'}>
                <AiFillHome className='text-3xl'/>
            </Link>
            <div  className='cursor-pointer flex relative max-w-[50px]'>
                <BsBag onClick={() => setIsOpen(!isOpen)}  className='text-3xl'/>
                <div className='absolute bg-red-500 -right-2  w-[18px] -bottom-2 text-[12px] items-center flex justify-center rounded-full text-white'>{itemAmount}</div>
            </div>
        </div>
    </div>
  )
}

export default Header