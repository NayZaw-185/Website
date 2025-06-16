import React from "react";
import laptop from "./assets/image/img1.jpg";
const App = () => {
  return (
    <>
      <div className="h-50 bg-gray-400 flex justify-center items-center text-black border-2 border-white font-extrabold">
        Catogaries
      </div>
      <div className="h-full bg-gray-200">
        <div className="flex justify-between">
          <div className="font-extrabold h-50 w-full bg-amber-600 flex justify-center items-center border-2 border-white">
           <img src={laptop} alt="" className="w-60 h-full"/>
          </div>
          <div className="font-extrabold text-center h-50 w-full  bg-amber-500 flex justify-center items-center border-2 border-white">
            Age
          </div>
          <div className="font-extrabold text-center h-50 w-full  bg-amber-400 flex justify-center items-center border-2 border-white">
            Address
          </div>
        </div>

        <div className="flex justify-between">
          <div className="font-extrabold h-50 w-full bg-red-600 flex justify-center items-center border-2 border-white">
            Shoon Sandar Kyaw
          </div>
          <div className="font-extrabold text-center h-50 w-full  bg-red-500 flex justify-center items-center border-2 border-white">
            Age
          </div>
          <div className="font-extrabold text-center h-50 w-full  bg-red-400 flex justify-center items-center border-2 border-white">
            Address
          </div>
        </div>

        <div className="flex justify-between">
          <div className="font-extrabold h-50 w-full bg-green-600 flex justify-center items-center border-2 border-white">
            Kyaw Thuya
          </div>
          <div className="font-extrabold text-center h-50 w-full  bg-green-500 flex justify-center items-center border-2 border-white">
            Age
          </div>
          <div className="font-extrabold text-center h-50 w-full  bg-green-400 flex justify-center items-center border-2 border-white">
            Address
          </div>
        </div>

        <div className="flex justify-between">
          <div className="font-extrabold h-50 w-full bg-gray-600 flex justify-center items-center border-2 border-white">
            Thuya Myint
          </div>
          <div className="font-extrabold text-center h-50 w-full  bg-gray-500 flex justify-center items-center border-2 border-white">
            Age
          </div>
          <div className="font-extrabold text-center h-50 w-full  bg-gray-400 flex justify-center items-center border-2 border-white">
            Address
          </div>
        </div>

        <div className="flex justify-between">
          <div className="font-extrabold h-50 w-full bg-blue-600 flex justify-center items-center border-2 border-white">
            Shwe Nyan
          </div>
          <div className="font-extrabold text-center h-50 w-full  bg-blue-500 flex justify-center items-center border-2 border-white">
            Age
          </div>
          <div className="font-extrabold text-center h-50 w-full  bg-blue-400 flex justify-center items-center border-2 border-white">
            Address
          </div>
        </div>
      </div>

      <div className="h-50 flex justify-center items-center bg-sky-300 border-4 border-white font-extrabold">
        Footer
      </div>
    </>
  );
};

export default App;
