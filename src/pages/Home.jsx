import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Tokopedia from '../assets/tokped.png'
import Shopee from '../assets/shopee.png'
import Cabang from '../assets/cabang.jpg'
import ProductsAmount from '../components/ProductsAmount'
import { FaRegHandPointDown } from "react-icons/fa";
import style from "./../style/style.module.css"
import WhatsApp from '../assets/whatsapp.png'

const Home = () => {
  return (
    <>  
        <div id="home"></div>
        <Navbar className='z-50 top-0'/>

        <a href='https://wa.me/6287840758430' target="_blank">
            <img
                src={WhatsApp}
                className={`${style.whatsapp} fixed z-50 h-[60px] lg:h-[80px] bottom-5 right-5 hover:h-[100px] duration-500`}
            />
        </a>

        <div className='flex w-full flex-col justify-center z-0'>
            <div className='bg-uni bg-no-repeat bg-cover w-full flex flex-col items-center justify-center h-screen'>
                <div className='md:mt-2 z-0 mb-4 w-full md:w-4/5 flex flex-col justify-center md:w-1/2 md:justify-start'>
                    <div className='text-center lg:text-start w-full lg:w-1/2 rounded-lg text-gray-800 text-xl'>
                        <div className='w-full rounded-lg text-gray-100 text-6xl font-bold pt-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,2)]'>
                            Spesial Diskon bulan ini!
                        </div>
                        <div className='flex justify-center items-center lg:justify-start gap-4 w-full rounded-lg text-gray-100 text-xl pt-0 md:pt-4 mt-4 md:mt-0'>
                            <FaRegHandPointDown className={`${style.element} text-yellow-500`}/>
                            <div>
                                Scroll down below !
                            </div>
                            <FaRegHandPointDown className={`${style.element} text-yellow-500`}/>
                        </div>
                    </div>
                    <div className='flex flex-col px-4 lg:w-1/2 lg:px-0 xl:w-1/3'>
                        <a 
                            href="https://tokopedia.link/TGHEMP5fMmb?utm_source=instagram&utm_medium=brand&utm_campaign=192939_bioig-unicase_1603222_310322" target='_blank_' 
                            className='flex justify-start items-center bg-[#004a87] hover:bg-[#0a74cc] duration-500 mt-8 border-2 border-gray-300 rounded-xl'
                        >
                            <img
                                src={Tokopedia}
                                className='w-[50px] p-1 ml-2'
                            />
                            <div className='ml-6 text-xl font-semibold text-gray-100'>
                                Unicase Store
                            </div>
                        </a>
                        <a 
                            href="https://shopee.co.id/unicasestore?smtt=9&utm_campaign=s1385131_ss_id_igbp_unicase2023&utm_content=bioig&utm_medium=seller&utm_source=instagram" target='_blank_'
                            className='flex justify-start items-center bg-[#004a87] hover:bg-[#0a74cc] duration-500 mt-4 border-2 border-gray-300 rounded-xl'
                        >
                            <img
                                src={Shopee}
                                className='w-[50px] p-2 my-1 ml-2'
                            />
                            <div className='ml-6 text-xl font-semibold text-gray-100'>
                                Unicase Store
                            </div>
                        </a>
                        <a 
                            href="https://tokopedia.link/V9q3zUD3Pub?utm_source=instagram&utm_medium=brand&utm_campaign=_nomad_ig_111122_311222" target='_blank_'
                            className='flex justify-start items-center bg-[#004a87] hover:bg-[#0a74cc] duration-500 mt-4 border-2 border-gray-300 rounded-xl'
                        >
                            <img
                                src={Tokopedia}
                                className='w-[50px] p-1 ml-2'
                            />
                            <div className='ml-6 text-xl font-semibold text-gray-100'>
                                Nomad Official
                            </div>
                        </a>
                        <a 
                            href="https://linktr.ee/UnicaseCabang?utm_source=Linktree&utm_medium=Marketplace&utm_campaign=Promotions" target='_blank_'
                            className='flex justify-start items-center bg-[#004a87] hover:bg-[#0a74cc] duration-500 mt-4 border-2 border-gray-300 rounded-xl'
                        >
                            <img
                                src={Cabang}
                                className='w-[50px] p-2 my-1 ml-2 rounded-full'
                            />
                            <div className='ml-6 text-xl font-semibold text-gray-100'>
                                Unicase Cabang
                            </div>
                        </a>
                    </div>
                </div>
                <div
                    id="aboutus">
                </div>
            </div>
        </div>
        <div id="products"></div>
        
        <div className='bg-blue-800 w-full flex items-center justify-center'>
            <Products/>
        </div>
        
        <div className='bg-blue-800 w-full flex items-center justify-center'>
            <ProductsAmount/>
        </div>

        <Footer className='z-50'/>
    </>
  )
}

export default Home