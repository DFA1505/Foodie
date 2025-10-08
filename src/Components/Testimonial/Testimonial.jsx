import React from 'react'
import Slider from 'react-slick'

const testimonialData = [
    {
        id:1,
        name:"Samuel",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe culpa aliquam atque voluptate quas perspiciatis beatae animi alias dicta officiis.",
        img: 'https://picsum.photos/101/101'
    },
    {
        id:2,
        name:"Raphael Belloli",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe culpa aliquam atque voluptate quas perspiciatis beatae animi alias dicta officiis.",
        img: 'https://picsum.photos/102/102'
    },
    {
        id:3,
        name:"Raymone James",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe culpa aliquam atque voluptate quas perspiciatis beatae animi alias dicta officiis.",
        img: 'https://picsum.photos/103/103'
    }
]

var settings = {
    dots:true,
    arrows:false,
    infinite:true,
    speed:500,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:'linear',
    pauseOnHover: true,
    pauseOnFocus:true,
}

const Testimonial = () => {
  return (
    <div className='py-10' >
      <div className="container">
        <div className='text-center mb-20 max-w-[400px] mx-auto' data-aos='fade-down' data-aos-duration='500'>
          {/* <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Testimonial</p> */}
          <h1 className='text-3xl font-bold dark:text-white'>Testimonial</h1>
          <p className='text-xs text-gray-400 dark:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias temporibus nulla modi ipsa labore veniam beatae harum, debitis ea non?</p>
        </div>

        <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6' data-aos='fade-up' data-aos-duration='500'>
            <Slider {...settings}>
                {
                    testimonialData.map((data)=>(
                        <div key={data.id} className='p-6 rounded-xl bgwhite dark:bg-gray-800 dark:hover:bg-primary/60 hover:bg-primary hover:text-white duration-300 shadow-xl'>
                            <div>
                                <img src={data.img} alt="" className='rounded-full block mx-auto mb-6'/>
                                <h1 className='text-xl font-bold dark:text-white flex justify-center mb-1'>{data.name}</h1>
                                <p className='text-black/50 text-sm font-serif dark:text-white'>{data.text}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
