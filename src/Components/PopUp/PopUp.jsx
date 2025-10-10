import React from "react";
import { FaCartShopping, FaX } from "react-icons/fa6";
import { IoClose, IoCloseCircleOutline } from "react-icons/io5";

const PopUp = ({ orderPopUp, handleOrderPopUp }) => {
  return (
    <>
      {orderPopUp && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 duration-200 dark:text-white w-[300px] rounded-xl">
              <div className="flex items-center justify-between">
                <h1>Order Now!</h1>
                <div>
                  <FaX className="cursor-pointer" onClick={handleOrderPopUp} />
                </div>
              </div>

              <div>
                <input type="text" placeholder="Name" className="form-input" />
                <input type="text" placeholder="Email" className="form-input" />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-input"
                />
                <div className="mt-3 flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 flex items-center gap-1">
                    Order
                    <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
