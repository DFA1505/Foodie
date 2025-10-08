import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import logo from "../../assets/Logo.png";

const FooterData = [
  {
    title: "Home",
    link: "/#blog",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Login",
    link: "/#",
  },
  {
    title: "Services",
    link: "/#contact",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950 bg-gray-300">
      <div className="container">
        <div className="grid md:grid-cols-3 p-10 sm:p-0">
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              <img src={logo} alt="" className="max-w-[150px]" />
            </a>
            <p className=" lg:pr-24 pt-3 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
              voluptas eos reprehenderit maiores.
            </p>
            <p className=" lg:pr-24 mt-4 dark:text-white">
              Made by Daniel Fernandes Araujo👻
            </p>
            <a
              href="https://www.linkedin.com/in/daniel-fernandes-6b19b2299/"
              target="blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full hover:scale-105 duration-300"
            >
              Visit My Linkedin
            </a>
          </div>

          <div className="col-span-2 grid sm:grid-cols-3 sm:mt-28">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3 md:flex justify-center dark:text-primary">
                Important Links
              </h1>
              <ul className="space-y-2 mt-0">
                {FooterData.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="dark:text-white hover:text-black  dark:hover:text-gray-400 duration-300 md:flex justify-center "
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3 justify-center md:flex dark:text-primary">
                Address
              </h1>
              <div>
                <div className="md:flex justify-center gap-3 dark:text-white">
                  <FaLocationArrow className="tra" />
                  <p className="">Nova Friburgo, Rio de Janeiro</p>
                </div>
                <div className="md:flex justify-center gap-3 mt-6 mb-5 dark:text-white">
                  <FaMobileAlt />
                  <p>+21 123456789</p>
                </div>
              </div>
            </div>

            <div className="flex md:justify-center items-center space-x-9 md:ml-9">
              <a href="">
                <FaInstagram className="text-3xl hover:text-primary duration-300 mx-auto dark:text-white dark:hover:text-primary" />
              </a>
              <a href="">
                <FaYoutube className="text-3xl hover:text-primary duration-300 mx-auto dark:text-white dark:hover:text-primary" />
              </a>
              <a href="">
                <FaLinkedin className="text-3xl hover:text-primary duration-300 mx-auto dark:text-white dark:hover:text-primary" />
              </a>
              <a href="">
                <FaTwitter className="text-3xl hover:text-primary duration-300 mx-auto dark:text-white dark:hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright 2025 &#169;. All Rights Reserved 
      </div>
    </div>
  );
};

export default Footer;
