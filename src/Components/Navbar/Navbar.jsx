import React from 'react'
import logo from '../../assets/Logo.png'
import { FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'

const Navbar = ({handleOrderPopUp}) => {
  return (
    <div className='shadow-xl bg-white dark:bg-gray-800 dark:text-white duration-200'>
      <div className='container py-3 sm:py-0'>
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold'>
              <img src={logo} alt="" className='w-24'/>
            </a>
          </div>
          <div className='flex gap-3'>
            <ul className='hidden sm:flex gap-4'>
              <li>
                <a href="" className='inline py-4 px-4 hover:text-primary font-semibold'>Home</a>
              </li>
              <li>
                <a href="" className='inline py-4 px-4 hover:text-primary font-semibold'>About</a>
              </li>
              <li>
                <a href="" className='inline py-4 px-4 hover:text-primary font-semibold'>Contact</a>
              </li>
            </ul>
          </div>
          <div className='flex gap-3'>
            <DarkMode/>
            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 flex items-center gap-1' onClick={handleOrderPopUp}>
              Order
              <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
