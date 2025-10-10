import React from "react";
import Food1 from "../../assets/Banner/SI3.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { RiRefund2Line } from "react-icons/ri";

const Banner = () => {
  return (
    <div className="min-h-[550px] mt-32 pb-32 sm:px-6" id="about">
      <div>
        <div data-aos="slide-right" data-aos-duration="500" className="container dark:bg-gray-800 rounded-full p-24 sm:p-32 bg-gray-100 dark:text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <img
                src={Food1}
                alt=""
                className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
              <h1 className="text-3xl sm:text-4xl font-bold">
                Lorem, ipsum dolor.
              </h1>
              <p className="text-sm text-gray-500 tracking-wide leading-5 dark:text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                doloribus magni perspiciatis sed atque temporibus dolore libero?
                Impedit, itaque ipsam.
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                at repellat laudantium iusto optio, sit sequi vero voluptatibus
                porro in?
              </p>
              <div className=" gap-6 grid grid-cols-2 lg:flex">
                <div className="py-4">
                  <GrSecure className="text-4xl h-14 w-14 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400 cursor-pointer sm:h-20 sm:w-20" />
                </div>
                <div className="py-4">
                  <IoFastFood className="text-4xl h-14 w-14 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400 cursor-pointer sm:h-20 sm:w-20" />
                </div>
                <div className="py-4">
                  <GiFoodTruck className="text-4xl h-14 w-14 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400 cursor-pointer sm:h-20 sm:w-20" />
                </div>
                <div className="py-4">
                  <RiRefund2Line className="text-4xl h-14 w-14 shadow-sm p-5 rounded-full bg-blue-100 dark:bg-blue-400 cursor-pointer sm:h-20 sm:w-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
