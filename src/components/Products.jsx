import React, { useState } from 'react'
import api from './../api/dataProduk.json'
import { FaStar } from "react-icons/fa";
import { RiKeyboardBoxLine } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";

import ReactPaginate from 'react-paginate';

const Products = () => {

    const [filteredProduct, setFilteredProduct] = useState(api.data);

    const filterBySearch = (event) => {
        setCurrentPage(1)
        const query = event.target.value;
        var updatedList = [...api.data];
        updatedList = updatedList.filter((item) => {
            return (
                item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
            );
        });
        setBlogPosts(updatedList);
    };

    const [blogPosts, setBlogPosts] = useState(api.data);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    const [boxView, setBoxView] = useState(true);

    const chooseBoxView = () => {
        setBoxView(!boxView)
    }
    
    return (
        <>  
            <div className='flex w-full flex-col justify-center'>
                <div className='bg-gray-200 w-full flex flex-col items-center justify-center'>
                    <div className='w-full px-4 md:px-8 md:mx-8 lg:mx-8 mt-32 mb-16 bg-white lg:w-[1280px] flex flex-col justify-center items-center md:rounded-3xl'>
                        <div className='text-4xl font-semibold mt-8'>
                            Produk Kami
                        </div>
                        <div className='my-4 w-full flex gap-2'>
                            <input
                                className="text-gray-800 font-semibold text-xl bg-gray-200 w-full py-4 pl-8 md:px-8 my-4 rounded-3xl"
                                type="search"
                                placeholder="Search product ..."
                                onChange={filterBySearch}
                            />
                        </div>
                        <div className='w-full mb-8 flex gap-4'>
                            {
                                boxView == true ?
                                    <button onClick={() => chooseBoxView(false)} className='px-4 py-2 shadow border-2 hover:bg-gray-100 border-gray-500 hover:shadow-xl rounded-xl flex justify-start items-center gap-2'>
                                        <CiBoxList className='h-[25px] w-[25px]'/>
                                        <div className='font-semibold'>
                                            List View
                                        </div>
                                    </button>
                                    :
                                    <button onClick={() => chooseBoxView()} className='px-4 py-2 shadow border-2 hover:bg-gray-100 duration-500 border-gray-500 hover:shadow-xl rounded-xl flex justify-start items-center gap-2'>
                                        <RiKeyboardBoxLine className='h-[25px] w-[25px]'/>
                                        <div className='font-semibold'>
                                            Box View
                                        </div>
                                    </button>
                            }
                        </div>
                        {
                            boxView == true ?
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-8'>
                                    {currentPosts.map((current, index) => {
                                        {
                                            return (
                                                <a href={`${current.product_url}`} target="_blank" key={index} className='hover:shadow-2xl hover:border-2 hover:border-blue-700 duration-500 shadow-lg rounded-xl flex flex-col justify-between pb-4'>
                                                    <div className=''>
                                                        <div className='w-full p-4 pb-0 flex justify-center items-center'>
                                                            <img
                                                                src={current.primary_image.resize300}
                                                                className='rounded-t-xl border-2'
                                                            />
                                                        </div>
                                                        <div className='text-lg font-semibold px-4 py-2'>
                                                            {current.name}
                                                        </div>
                                                        <div className='md:hidden text-xl font-bold px-4 text-green-700'>
                                                            {current.price.text_idr}
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        <div className='hidden md:flex text-xl font-bold px-4 text-green-700'>
                                                            {current.price.text_idr}
                                                        </div>
                                                        <div className='gap-4 text-lg mt-2 px-4 flex justify-start items-center'>
                                                            <div className=''>
                                                                {
                                                                    current.stats.rating >= 90 &&
                                                                    <div className='flex gap-1'>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-yellow-400'/>
                                                                    </div>
                                                                }
                                                                {
                                                                    (current.stats.rating >= 80) && (current.stats.rating < 90) &&
                                                                    <div className='flex gap-1'>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                    </div>
                                                                }
                                                                {
                                                                    (current.stats.rating >= 60) && (current.stats.rating < 80) &&
                                                                    <div className='flex gap-1'>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                    </div>
                                                                }
                                                                {
                                                                    (current.stats.rating >= 40) && (current.stats.rating < 60) &&
                                                                    <div className='flex gap-1'>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                    </div>
                                                                }
                                                                {
                                                                    (current.stats.rating >= 20) && (current.stats.rating < 40) &&
                                                                    <div className='flex gap-1'>
                                                                        <FaStar className='text-yellow-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                    </div>
                                                                }
                                                                {
                                                                    current.stats.rating < 20 &&
                                                                    <div className='flex gap-1'>
                                                                        <FaStar className='text-gray-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                        <FaStar className='text-gray-400'/>
                                                                    </div>
                                                                }
                                                            </div>
                                                            <div className='text-sm font-semibold'>
                                                                {
                                                                    current.label_groups[0].title == "Stok Habis" ?
                                                                    <></>
                                                                    :
                                                                    <>{current.label_groups[0].title}</>
                                                                }
                                                            </div>
                                                        </div>
                                                        {
                                                            current.label_groups[0].title == "Stok Habis" ?
                                                            <div className={`text-red-500 text-md font-semibold mt-2 px-4`}>
                                                                Stok Habis
                                                            </div>
                                                            :
                                                            <div className={`${current.stock <= 20 ? 'text-red-500' : 'text-gray-800'} text-md font-semibold mt-2 px-4`}>
                                                                {current.stock} tersisa
                                                            </div>
                                                        }
                                                    </div>
                                                </a>
                                            )
                                        }
                                    })}
                                </div>
                                :
                                <div className='flex flex-col w-full gap-4 pb-8'>
                                    {currentPosts.map((current, index) => {
                                        {
                                            return (
                                                <a href={`${current.product_url}`} target="_blank" key={index} className='hover:shadow-2xl hover:border-2 hover:border-blue-700 duration-500 shadow-lg rounded-xl flex pb-4'>
                                                    <div className='w-full md:w-[150px] xl:w-[100px] px-4 pt-4 flex justify-center items-start md:items-center'>
                                                        <img
                                                            src={current.primary_image.resize300}
                                                            className='rounded-xl border-2'
                                                        />
                                                    </div>
                                                    <div className='w-full flex flex-col xl:flex-row justify-between'>
                                                        <div className=''>
                                                            <div className='text-sm md:text-md lg:text-xl font-semibold pr-2 md:pr-0 px-0 md:px-4 py-2'>
                                                                {current.name}
                                                            </div>
                                                            <div className='text-xl font-bold pr-2 md:pr-0 px-0 md:px-4 text-green-700'>
                                                                {current.price.text_idr}
                                                            </div>
                                                        </div>
                                                        <div className='xl:flex xl:flex-col xl:items-end'>
                                                            <div className='gap-2 text-lg mt-2 xl:mt-3 md:px-4 xl:px-4 flex flex-col justify-start items-start xl:items-end'>
                                                                <div className=''>
                                                                    {
                                                                        current.stats.rating >= 90 &&
                                                                        <div className='flex gap-1'>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-yellow-400'/>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        (current.stats.rating >= 80) && (current.stats.rating < 90) &&
                                                                        <div className='flex gap-1'>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        (current.stats.rating >= 60) && (current.stats.rating < 80) &&
                                                                        <div className='flex gap-1'>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        (current.stats.rating >= 40) && (current.stats.rating < 60) &&
                                                                        <div className='flex gap-1'>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        (current.stats.rating >= 20) && (current.stats.rating < 40) &&
                                                                        <div className='flex gap-1'>
                                                                            <FaStar className='text-yellow-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                        </div>
                                                                    }
                                                                    {
                                                                        current.stats.rating < 20 &&
                                                                        <div className='flex gap-1'>
                                                                            <FaStar className='text-gray-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                            <FaStar className='text-gray-400'/>
                                                                        </div>
                                                                    }
                                                                </div>
                                                                <div className='text-sm font-semibold'>
                                                                    {
                                                                        current.label_groups[0].title == "Stok Habis" ?
                                                                        <></>
                                                                        :
                                                                        <>{current.label_groups[0].title}</>
                                                                    }
                                                                </div>
                                                            </div>
                                                            {
                                                                current.label_groups[0].title == "Stok Habis" ?
                                                                <div className={`text-red-500 text-md font-semibold mt-2 px-0 md:px-4`}>
                                                                    Stok Habis
                                                                </div>
                                                                :
                                                                <div className={`${current.stock <= 20 ? 'text-red-500' : 'text-gray-800'} text-md font-semibold mt-2 pr-2 md:pr-0 px-0 md:px-4 xl:px-4`}>
                                                                    {current.stock} tersisa
                                                                </div>
                                                            }
                                                        </div>

                                                    </div>
                                                </a>
                                            )
                                        }
                                    })}
                                </div>
                        }
                            
                        {
                            blogPosts ? (
                                <div className="w-full mb-8 text-2xl font-bold">
                                    <ReactPaginate
                                        className='flex w-full flex text-sm md:text-xl md:flex-row justify-center items-center '
                                        onPageChange={paginate}
                                        pageCount={Math.ceil(blogPosts.length / postsPerPage)}
                                        previousLabel={'Prev'}
                                        nextLabel={'Next'}
                                        containerClassName={'pagination'}
                                        pageLinkClassName={'hover:bg-gray-600 hover:text-gray-100 duration-200 py-2 px-2 md:px-4 rounded-full'}
                                        previousLinkClassName={'hover:bg-gray-800 hover:text-gray-100 duration-500 py-2 px-4 rounded-full'}
                                        nextLinkClassName={'hover:bg-gray-800 hover:text-gray-100 duration-500 py-2 px-4 rounded-full'}
                                        activeClassName={"bg-gray-600 hover:bg-gray-800 duration-500 text-gray-100 py-2 rounded-full"}
                                    />
                                    <div id="stok"></div>
                                </div>
                            ) : (
                                <div className="loading">Loading...</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products