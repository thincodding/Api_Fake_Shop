import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDetails = () => {


  //toast
  const notify = () => {
    toast.success('Add to cart', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

//end

  const {addTocart} = useContext(CartContext);


// for detail cart
  const {id} = useParams();

  const {products} = useContext(ProductContext)

  const product = products.find((item) => {
    return item.id === parseInt(id)
  })

  if(!product){
    return(
      <>
      
        <section className='h-screen flex justify-center items-center font-bold'>Loading...</section>
      </>
    )
  }

  const {title, price, description, image} = product;


  return (
    <>
    
      <div className="container mx-auto flex justify-center items-center h-screen">
          <div className='flex w-[50%] space-x-20'>
              <div>
                  <img className='max-w-[300px]' src={image} alt="" />
              </div>
              <div className='space-y-5'>
                 <h3 className='text-3xl font-bold'>{title}</h3>
                 <p className='text-1xl text-gray-500'>{description}</p>
                 <p className='text-2xl text-orange-500 font-bold'>$ {price}</p>
                 <div onClick={notify}>
                 <button onClick={() => addTocart(product, product.id)} className='bg-red-500 px-5 p-3 text-white rounded-md hover:bg-red-700 transition-all duration-300'>
                  <div >Add To Cart</div>
                  <ToastContainer/>
                 </button>
                 </div>
              </div>
          </div>
      </div>

    </>
  )
}

export default ProductDetails