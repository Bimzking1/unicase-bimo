import React, { useState, useEffect }  from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom'
import UnicaseRounded from '../assets/unicase_rounded.svg'

const Navbar = () => {

  const navigate = useNavigate()
  const [navSize, setnavSize] = useState("auto");
  const [navColor, setnavColor] = useState("transparent");
  const [navTextColor, setNavTextColor] = useState("white");
  const [username, setUsername] = useState(localStorage.getItem('username'));
  const [password, setPassword] = useState(localStorage.getItem('password'));
  
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
    window.scrollY > 10 ? setNavTextColor("black") : setNavTextColor("white");
    window.scrollY > 10 ? setnavSize("auto") : setnavSize("auto");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  
  let [open, setOpen] = useState(false);
  
  const openNavbar = () => {
    if (open == false){
      setOpen(true)
    } else {
      setOpen(false)
    }
    
    if (navColor == "transparent"){
      setnavColor("white")
      setNavTextColor("black")
    }
  }

  const handleSubmit = () => {
    localStorage.clear()

    setTimeout(() => { 
        navigate('/login')
    }, 2000)
  }
  
  return (
    <div
      className='w-full fixed flex items-center justify-center z-50'
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: '0s ease-in'
      }}
    >
      <div className='w-full xl:w-[1280px]'>
        <div className='w-full md:flex items-center justify-between py-4 md:px-10 px-4'>

          <div onClick={()=>openNavbar()} className='font-bold text-3xl cursor-pointer flex items-center gap-2 z-50'>
            <Link to="/" className={`flex justify-center items-center`}>
                <div className='px-0'>
                  <img
                    src={UnicaseRounded} 
                    className='rounded-full h-[60px] w-[60px] text-gray-800 xl:text-white hover:text-gray-800 duration-500'
                  />
                </div>
                <div style={{color: navTextColor}} className='pl-4 lg:ml-4 font-semibold md:hover:bg-cyan-500 duration-500 rounded-full py-2 px-4 md:px-4 mb-0a'>
                    HOME
                </div>
            </Link>
          </div>

          <div onClick={()=>openNavbar()} className='absolute right-6 top-8 cursor-pointer xl:hidden w-7 h-7'>
            {
              open ? <XMarkIcon/> : <Bars3BottomRightIcon />
            }
          </div>

          <div 
            className={`
              xl:flex xl:items-center xl:pb-0 pb-4 absolute xl:static 
              left-0 w-full z-0
              xl:w-auto xl:pl-0 px-8
              ${open ? 'top-20' : 'top-[-490px]'}
            `}
            style={{
              backgroundColor: navColor,
              transition: '0s ease-in'
            }}
          >
            <div className='mt-6 mb-6 xl:items-center xl:text-center xl:gap-4 flex flex-col xl:flex-row xl:ml-8 xl:my-0 font-semibold'>
                <a href="#products" className='text-gray-800 bg-white hover:bg-[#5ED1EA] duration-500 text-2xl lg:text-3xl rounded-full py-2 px-4 md:px-8 mb-2 md:mb-0 font-semibold'>
                  PRODUK
                </a>
                <a href="#stok" className='text-gray-800 bg-white hover:bg-[#5ED1EA] duration-500 text-2xl lg:text-3xl rounded-full py-2 px-4 md:px-8 mb-2 md:mb-0 font-semibold'>
                  STOK
                </a>
            </div>
            <hr className='mb-2'/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar