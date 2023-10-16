import React, { useContext } from 'react'
import { BsEye, BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';



const Product = ({ product }) => {

    const {addTocart} = useContext(CartContext)

    const { id, image, category, title, price } = product;

    return (
        <>

            <div>
                <div className='border border-[#e4e4e4] h-[300px] relative mb-4 group overflow-hidden'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-[200px] mx-auto flex justify-center '>
                            <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} />
                        </div>
                        <div className='absolute top-6 right-0 p-2 flex flex-col
           items-center justify-center gap-y-2 
           -right-11 group-hover:right-5 opacity-0 group-hover:opacity-100 transition-all'>
                            <button onClick={()=> addTocart(product, id)}>
                                <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                                    <BsPlus className='text-3xl' />
                                </div>
                            </button>
                            <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl '>
                                <BsEye />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='text-sm'>{category}</div>
                    <Link to={'/'}>
                        <h1 className='font-semibold'>{title}</h1>
                    </Link>
                    <div className='font-semibold text-red-500'>$ {price}</div>
                </div>

            </div>
        </>
    )
}

export default Product