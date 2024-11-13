import React from "react";

const Hero = () => {
  // User-defined colors for the small boxes
  const boxColors = ["#23A6F0", "#FF5733", "#4CAF50"]; // Replace with your preferred hex color codes

  return (
    <div className="flex flex-col items-center py-[140px] px-[220px] top-[92px] text-white text-center">
      <div className="w-[699px] h-[496px] py-10 gap-10 flex flex-col items-center">
        <h5 className="text-blue-600 font-bold text-[16px] leading-6">Welcome</h5>

        <h1 className="w-[542px] h-[160px] text-white font-bold text-[58px] leading-[80px]">
          Selling on the internet like a pro
        </h1>

        <h4 className="h-[60px] w-[536px] font-normal text-xl text-white">
          We know how large objects will act, but things on a small scale just
          do not act that way.
        </h4>

        <div className="flex h-[52px] w-[430px] gap-2">
          <button className="h-[52px] w-[197px] rounded-md py-4 px-10 gap-[10px] font-bold bg-[#23A6F0] hover:bg-blue-600">
            Get Quote Now
          </button>
          <button className="flex h-[52px] w-[195px] rounded-[5px] border-[2px] border-[#23A6F0] py-4 px-12 gap-[10px] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white items-center">
            Learn More
          </button>
        </div>
      </div>
      
      
      {/* {/* <div className="flex flex-col w-[1046px] h-[292px] max-w-[1080px] gap-[30px] mt-10 justify-center">
        <div className="h-[292px] w-[328px] py-9 px-10 gap-5 bg-white">
          <div className="h-[76px] w-[70px] rounded-xl py-6 px-5 gap-5 bg-[#FFDCD1]"> 
            </div>
          <h5 className="w-[135px] h-[24px] font-bold text-[16px] text-[#252B42] mt-3">training Courses</h5>
          <hr className="bg-red-500 h-[5px] w-[55px] mt-4" />

          <p className="text-[#737373] text-justify mt-3 text-[20px] font-normal ">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p>
          
        </div>
        
      </div> */}
    </div> 
  );
};

export default Hero;
