"use client";
import React from 'react';

const Navbar = () => {
  return (
    <div className="h-[91px] w-full px-6 flex justify-evenly items-center py-[50px]">
      <div className="h-[58px] w-[187px] py-[17px] ml-[150px]"> 
        <h3 className="text-[#FFFFFF] font-bold text-2xl cursor-pointer hover:text-blue-300">BrandName</h3>
      </div>

      <ul className="flex h-[30px] mt-2 font-bold leading-6 flex-row items-center text-white gap-[40px] mr-[400px]"> 
        <li><a href="#" className='hover:text-blue-600'>Home</a></li>
        <li><a href="#" className='hover:text-blue-600'>Product</a></li>
        <li><a href="#" className='hover:text-blue-600'>Pricing</a></li>
        <li><a href="#" className='hover:text-blue-600'>Contact</a></li>
      </ul>

      <div className="mr-[150px] flex flex-row gap-[30px]">
        <button className="text-white">Login</button>
        <button className="w-[110px] h-[52px] px-[25px] py-[15px] rounded-md bg-[#23A6F0] font-bold text-[14px] leading-[22px] flex items-center text-white hover:bg-blue-500">
          JOIN US
        </button>
      </div>
    </div>
  );
};

export default Navbar;
