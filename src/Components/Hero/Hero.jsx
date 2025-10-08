import React, { useState } from "react";
import Food1 from "../../assets/Hero/Food1.jpg";
import Food2 from "../../assets/Hero/Food2.jpg";
import Food3 from "../../assets/Hero/Food3.jpg";
import bgImg from "../../assets/Hero/bgImage.jpg";

const ImageList = [
  {
    id: 1,
    image: Food1,
  },
  {
    id: 2,
    image: Food2,
  },
  {
    id: 3,
    image: Food3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: `top`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "0%",
};

const Hero = ({handleOrderPopUp}) => {
  const [imageId, setImageId] = useState(Food1);
  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1" data-aos='zoom-out' data-aos-duration='400' data-aos-once='true'>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome to the Foodie Zone
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Asperiores nesciunt ullam fugiat numquam minima doloribus
              obcaecati corrupti officia commodi assumenda eaque sit dolores
              veritatis soluta, porro enim tenetur et quidem!
            </p>

            <div>
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 flex items-center gap-1 mx-auto sm:mx-0" onClick={handleOrderPopUp}>
                Order Now
              </button>
            </div>
          </div>

          <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
            <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden"  data-aos='zoom-out' data-aos-duration='700' data-aos-once='true'>
                <img src={imageId} alt="" className="w-[300px] sm:w-[450px] mx-auto spin"/>
            </div>

            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center items-center gap-4 absolute bottom-[0px] lg:-right-10 bg-gray-200 dark:bg-white/30 rounded-full lg:h-[300px]">
              {
                ImageList.map((data)=>(
                  <img  data-aos='zoom-out' data-aos-duration='400' data-aos-once='true' key={data.id} src={data.image} className="max-w-[800px] h-[80px] object-contain hover:scale-105 duration-200 inline-block cursor-pointer" onClick={()=>(
                    setImageId(
                      data.id ===1?Food1:data.id === 2? Food2:Food3
                    )
                  )}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
