import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Banner from './Components/Banner/Banner'
import AppStore from './Components/AppStore/AppStore'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css';
import PopUp from './Components/PopUp/PopUp'


const App = () => {

   const[orderPopUp,setOrderPopUp] = useState(false)

  const handleOrderPopUp = () =>{
    setOrderPopUp(!orderPopUp)
  }


  useEffect(()=>{
  Aos.init({
    offset:100,
    duration:500,
    easing:'ease-in-sine',
    delay:100,
  })
  Aos.refresh()
},[])


  return (
    <div className='dark:bg-[#191a1c] overflow-hidden'>
      <Navbar handleOrderPopUp={handleOrderPopUp}/>
      <Hero handleOrderPopUp={handleOrderPopUp}/>
      <Services />
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer />
      <PopUp orderPopUp={orderPopUp} handleOrderPopUp={handleOrderPopUp}/>
    </div>
  )
}

export default App
