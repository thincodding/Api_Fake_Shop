import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Alert() {

    const notify = () => {
        toast.success('🦄 Wow so easy!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <>

            <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer/>
            </div>

        </>
    )
}

export default Alert