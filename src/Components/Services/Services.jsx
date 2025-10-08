import React from 'react'
import SI1 from '../../assets/Services/Food1.jpg'
import SI2 from '../../assets/Services/SI2.jpg'
import SI3 from '../../assets/Services/Food3.jpg'

const ServicesData = [
  {
    id:1,
    img:SI1,
    name: 'Pasta',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates possimus id porro totam quis ex quas, provident accusamus neque voluptate!'
  },
  {
    id:2,
    img:SI2,
    name: 'Coffee',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates possimus id porro totam quis ex quas, provident accusamus neque voluptate!'
  },
  {
    id:3,
    img:SI3,
    name: 'Hamburguer',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates possimus id porro totam quis ex quas, provident accusamus neque voluptate!'
  },
]

const Services = () => {
  return (
    <div className='py-10'>
      <div className='container'>
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
          <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Our Services</p>
          <h1 className='text-3xl font-bold dark:text-white'>Services</h1>
          <p className='text-xs text-gray-400 dark:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias temporibus nulla modi ipsa labore veniam beatae harum, debitis ea non?</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-14 md:gap-2 lg:gap-5 place-items-center '>
          {
            ServicesData.map((data)=>(
              <div  data-aos='zoom-in' data-aos-duration='300'  key={data.id} className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary p-4 shadow-xl cursor-pointer'>
                <div className='h-[100px] '>
                  <img src={data.img} alt="" className='mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 w-full max-w-[200px] flex justify-center items-center'/>
                </div>

                <div className='mt- group-hover:text-white dark:text-white'>
                  <h1 className='text-2xl font-bold dark:group-hover:text-primary flex justify-center pb-2'>{data.name}</h1>
                  <p className='group-hover:text-white text-sm line-clamp-2 dark:group-hover:text-primary'>{data.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services
