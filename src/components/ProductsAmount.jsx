import React, { useState } from 'react'
import api from './../api/dataProduk.json'
import { RiKeyboardBoxLine } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProductsAmount = () => {

    const [blogPosts, setBlogPosts] = useState(api.data);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
    
    const indexOfLastPost = currentPage * postsPerPage;

    const [tableView, setTableView] = useState(true);

    const chooseTableView = () => {
        setTableView(!tableView)
    }
    
    const dataAscending = [
        {
          name: "Samsung Galaxy Tab S9 12/256GB",
          stock: 12
        },
        {
          name: "Samsung Galaxy A04s 4/128GB",
          stock: 20
        },
        {
          name: "Samsung Galaxy S21 FE 5G 8/256GB",
          stock: 24
        },
        {
          name: "Samsung Z Flip5 Front Protection Film",
          stock: 24
        },
        {
          name: "Samsung Galaxy Tab S9 8/128GB",
          stock: 32
        },
        {
          name: "Samsung Galaxy A04e 3/64GB",
          stock: 35
        },
        {
          name: "Samsung Z Fold5 Standing Case With Strap",
          stock: 35
        },
        {
          name: "Samsung Galaxy Z Flip5 8/512GB [BMW Exclusive Package] - Graphite",
          stock: 43
        },
        {
          name: "Samsung Galaxy M14 5G 4GB/64GB",
          stock: 43
        },
        {
          name: "Samsung Galaxy Tab S9 WIFI 8/128GB - Gray",
          stock: 43
        }
    ]
    
    const dataDescending = [
        {
          name: "Samsung Galaxy Watch 5 Pro (45MM)",
          stock: 5678
        },
        {
          name: "Samsung Galaxy A24 LTE 8/128GB [Dilayani Tokopedia]",
          stock: 2333
        },
        {
          name: "Samsung Galaxy A14 LTE 4GB/128GB",
          stock: 2000
        },
        {
          name: "Samsung Galaxy Tab S9 Ultra 5G 12/256GB - Gray",
          stock: 1234
        },
        {
          name: "Samsung Galaxy A34 5G 8/256GB [Exclusive Gaming Package] - AwesomeLime",
          stock: 1000
        },
        {
          name: "Samsung Galaxy M23 5G 6GB/128GB",
          stock: 987
        },
        {
          name: "Samsung Galaxy S22+ 5G 8/128GB - Pink Gold",
          stock: 987
        },
        {
          name: "Samsung Galaxy A14 LTE 6/128GB",
          stock: 980
        },
        {
          name: "Samsung Galaxy A13 LTE 4/64GB",
          stock: 980
        },
        {
          name: "Samsung Galaxy S23+ 5G 8/256GB",
          stock: 896
        }
    ]

    return (
        <>  
            <div className='flex w-full flex-col justify-center'>
                <div className='bg-gray-200 w-full flex flex-col items-center justify-center'>
                    <div className='w-full px-4 md:px-8 md:mx-8 lg:mx-8 mt-0 mb-16 bg-white lg:w-[1280px] flex flex-col justify-center items-center md:rounded-3xl'>
                        <div className='text-4xl font-semibold mt-8'>
                            Data Stok Produk
                        </div>
                        <div className='w-full mb-8 flex gap-4 mt-8'>
                            {
                                tableView == true ?
                                    <button onClick={() => chooseTableView(false)} className='px-4 py-2 shadow border-2 hover:bg-gray-100 border-gray-500 hover:shadow-xl rounded-xl flex justify-start items-center gap-2'>
                                        <CiBoxList className='h-[25px] w-[25px]'/>
                                        <div className='font-semibold'>
                                            Chart View
                                        </div>
                                    </button>
                                    :
                                    <button onClick={() => chooseTableView()} className='px-4 py-2 shadow border-2 hover:bg-gray-100 duration-500 border-gray-500 hover:shadow-xl rounded-xl flex justify-start items-center gap-2'>
                                        <RiKeyboardBoxLine className='h-[25px] w-[25px]'/>
                                        <div className='font-semibold'>
                                            Table View
                                        </div>
                                    </button>
                            }
                        </div>
                        {
                            tableView == true ?
                            <>
                                <div className='text-2xl font-semibold mb-8 text-center'>
                                    10 Barang Terbanyak
                                </div>
                                <div className='gap-4 pb-8'>
                                    <table className="shadow-xl w-full table-fixed border-collapse border border-slate-500">
                                        <thead className='bg-gray-300 hover:bg-gray-500 duration-500 hover:text-gray-100'>
                                            <tr>
                                                <th className='border border-slate-600 w-[40px]'>No</th>
                                                <th className='border border-slate-600 w-2/3'>Nama</th>
                                                <th className='border border-slate-600'>Stok</th>
                                            </tr>
                                        </thead>
                                        {[...blogPosts].sort((a, b) => b.stock - a.stock).map((currentPost, index) => {
                                            {
                                                return (
                                                    <tbody>
                                                        {
                                                            index < 10 &&
                                                            <tr className='hover:bg-gray-200 duration-500'>
                                                                <td className='border border-slate-600 text-center w-[40px]'>{index+1}</td>
                                                                <td className='border border-slate-600 pl-2'>{currentPost.name}</td>
                                                                <td className='text-center border border-slate-600'>{currentPost.stock}</td>
                                                            </tr>
                                                        }
                                                    </tbody>
                                                )
                                            }
                                        })}
                                    </table>
                                </div>
                                <div className='text-2xl font-semibold mb-8 text-center'>
                                    10 Barang Paling Sedikit
                                </div>
                                <div className='gap-4 pb-8'>
                                    <table className="w-full table-fixed border-collapse border border-slate-500">
                                        <thead className='bg-gray-300 hover:bg-gray-500 duration-500 hover:text-gray-100'>
                                            <tr>
                                                <th className='border border-slate-600 w-[40px]'>No</th>
                                                <th className='border border-slate-600 w-2/3'>Nama</th>
                                                <th className='border border-slate-600'>Stok</th>
                                            </tr>
                                        </thead>
                                        {[...blogPosts].sort((a, b) => a.stock - b.stock).map((currentPost, index) => {
                                            {
                                                return (
                                                    <tbody>
                                                        {
                                                            index < 10 &&
                                                            <tr className='hover:bg-gray-200 duration-500'>
                                                                <td className='border border-slate-600 text-center w-[40px]'>{index+1}</td>
                                                                <td className='border border-slate-600 pl-2'>{currentPost.name}</td>
                                                                <td className='text-center border border-slate-600'>{currentPost.stock}</td>
                                                            </tr>
                                                        }
                                                    </tbody>
                                                )
                                            }
                                        })}
                                    </table>
                                </div>
                            </>
                            :
                            <>
                                <div className='w-full px-4 md:px-8 md:mx-8 lg:mx-8 mt-0 bg-white lg:w-[1280px] flex flex-col md:flex-row md:gap-16 justify-center items-center md:rounded-3xl'>
                                    <div>
                                        <div className='text-2xl font-semibold my-8 text-center'>
                                            10 Barang Terbanyak
                                        </div>
                                        <BarChart
                                            width={320}
                                            height={300}
                                            data={dataDescending}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 10,
                                                bottom: 15,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="stock" fill="#004a87" activeBar={<Rectangle fill="#01a9eb" stroke="blue" />} />
                                        </BarChart>
                                    </div>
                                    <div className=''>
                                        <div className='text-2xl font-semibold my-8 text-center'>
                                            10 Barang Paling Sedikit
                                        </div>
                                        <BarChart
                                            width={320}
                                            height={300}
                                            data={dataAscending}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 10,
                                                bottom: 15,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="stock" fill="#004a87" activeBar={<Rectangle fill="#01a9eb" stroke="blue" />} />
                                        </BarChart>
                                    </div>
                                </div>
                                <div className='w-full px-4 md:px-8 md:mx-8 lg:mx-8 mt-0 mb-16 bg-white lg:w-[1280px] flex flex-col justify-center items-center md:rounded-3xl'>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsAmount