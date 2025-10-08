import React from 'react'
import { BiLogoPlayStore } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa6'
import { GrAppleAppStore } from 'react-icons/gr'

const AppStore = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 py-14'>
      <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-24 lg:gap-44'>
            <div data-aos='fade-up' data-aos-duration='300' >
                <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-white text-gray-700'>Foodly is Available for Android, IOS and PC</h1>
            </div>
            <div className='flex xl:gap-32 gap-16 px-5 justify-center'>
                <a href="" data-aos='fade-up' data-aos-duration='500'>
                    <BiLogoPlayStore className='text-gray-700 dark:text-white text-[50px] hover:text-primary dark:hover:text-primary xl:text-[100px]'/>
                    <p className='font-bold text-gray-700 dark:text-white flex justify-center'>Play Store</p>
                </a>
                <a href="" data-aos='fade-up' data-aos-duration='700'>
                    <GrAppleAppStore className='text-gray-700 dark:text-white text-[50px] hover:text-primary dark:hover:text-primary xl:text-[100px]'/>
                    <p className='font-bold text-gray-700 dark:text-white flex justify-center'>Apple Store</p>
                </a>
                <a href="" data-aos='fade-up' data-aos-duration='900'>
                    <FaLaptopCode className='text-gray-700 dark:text-white text-[50px] hover:text-primary dark:hover:text-primary xl:text-[100px] mb-3 translate-y-2'/>
                    <p className='font-bold text-gray-700 dark:text-white flex justify-center'>PC</p>
                </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AppStore
