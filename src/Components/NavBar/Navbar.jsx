import React from "react";
import dollar_img from "../../assets/dollar 1.png";
import navLogo from "../../assets/logo.png";

const Navbar = ({coin}) => {
  return (
    <div className="navbar bg-base-100 shadow-sm w-[90%] mx-auto">

      <div className="flex-1">
        
        <div className="flex items-center">
            <img src={navLogo} alt="" />
            <a className="btn btn-ghost text-xl font-bold">BPL 11</a>
        </div>
        
      </div>

      <div className="flex-none">
        <button className="flex justify-between items-center gap-2 font-bold text-xl">
         
         <p>{coin} Coins</p>
         <img src={dollar_img} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
