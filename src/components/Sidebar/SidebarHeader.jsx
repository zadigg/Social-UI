import React from "react";
import logo from "../../img/logo.png";
const SidebarHeader = () => {
  return (
    <div className=" w-[290px] mx-auto ">
      <div className="flex w-full mx-auto">
        <div className="pr-3 ">
          <img src={logo} alt="" />
        </div>
        <div>
          <input
            className="w-[231px] h-[42px] bg-[#E5E6E6] placeholder-[#9CA3AF] outline-none rounded-l-lg pl-3"
            type="text"
            placeholder="#Explore"
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
