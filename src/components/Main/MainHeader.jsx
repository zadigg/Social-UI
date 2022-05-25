import React from "react";
import profileImg from "../../img/profileImg.jpg";

import { HiOutlinePhotograph } from "react-icons/hi";
import { FiPlayCircle, FiShare2 } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FcCalendar } from "react-icons/fc";
import HeaderIcons from "./HeaderIcons";

const MainHeader = () => {
  return (
    <div className=" h-[123px] bg-[#FbFbFB] rounded-2xl ">
      <div className="w-[100%] mx-auto pt-2 pr-2 flex items-center space-x-4">
        <div>
          <img
            src={profileImg}
            className="hidden md:inline w-[51px] h-[50px] rounded-full"
            alt=""
          />
        </div>
        <div className="flex-grow">
          <input
            type="text"
            className="bg-[#ECEDED] h-[47px] w-full pl-3 rounded-lg placeholder:text-lg outline-none"
            placeholder="What's happening"
          />
        </div>
      </div>
      <div className="text-black w-[623px] mx-auto mt-5 pl-16 flex space-x-3">
        <HeaderIcons
          className="text-green-500"
          Icon={HiOutlinePhotograph}
          title="Photo"
          color="text-green-500"
        />

        <HeaderIcons
          className="text-green-500"
          Icon={FiPlayCircle}
          title="Video"
          color="text-purple-500"
        />

        <HeaderIcons
          className="text-green-500"
          Icon={HiOutlineLocationMarker}
          title="Locaton"
          color="text-red-500"
        />
        <HeaderIcons
          className="text-green-500"
          Icon={FcCalendar}
          title="schedule"
          color="text-orange-500"
        />
        <div>Share</div>
      </div>
    </div>
  );
};

export default MainHeader;
