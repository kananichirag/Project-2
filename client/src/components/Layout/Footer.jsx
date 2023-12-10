import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="fixed w-full z-10 bg-gradient-to-r from-[#9bc7f4] to-[#3183da]  text-black  bottom-0 ">  
      <div className="flex flex-col md:flex-row justify-between  md:px-32 px-5"></div>
      <div>
        <p className=" text-center py-4 text-[10px] lg:text-[15px] md:text-[15px]">
          @copyright developed by | Mr.Kanani | All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
