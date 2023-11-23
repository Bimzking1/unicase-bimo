import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {

    return (
        <>
            <div className='flex w-full flex-col justify-center z-0'>
                <div className='bg-uni bg-no-repeat bg-cover w-full flex flex-col items-center justify-center h-screen'>
                    <div className='bg-gray-200 p-16 rounded-2xl flex flex-col justify-center items-center text-center text-5xl lg:text-6xl lg:mb-8 mt-4 sm:mt-0 mb-8 font-bold text-gray-800'>
                        <div>
                            Page Not Found
                        </div>
                        <Link to="/" className='text-xl bg-[#01B7FE] text-gray-100 hover:bg-[#5ED1EA] hover:text-gray-800 px-8 py-4 mt-16 rounded-full duration-500'>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFound

// Test