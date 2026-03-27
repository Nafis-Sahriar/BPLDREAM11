import React from "react";
import bannerCentrePNG from "../../assets/banner-main.png";
import bannerBG from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div className="min-h-[70vh] bg-black flex items-center justify-center bg-no-repeat bg-center bg-cover w-[90%] mx-auto rounded-3xl mt-20" 
                    style={{ backgroundImage: `url(${bannerBG})`}}>


      <div className="space-y-10 flex justify-center items-center flex-col">
        <img src={bannerCentrePNG} alt="" />
        <h1 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="text-2xl text-gray-400 font-semibold">Beyond Boundaries Beyond Limits</p>
        <button className="btn bg-[#E7FE29]">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Banner;