import React from "react";
import MainBody from "./MainBody";
import MainHeader from "./MainHeader";
import { useSocialContext } from "../../context/SocialContext";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Main = () => {
  const { modal, toggleSidebar } = useSocialContext();

  return (
    <div
      className={`${
        modal && "blur-sm"
      }  flex-grow  mt-5 h-[90vh] overflow-y-scroll scrollbar-hide  `}
    >
      <div className="flex ">
        <div onClick={toggleSidebar} className="xl:hidden mt-5 cursor-pointer">
          <RiBarChartHorizontalLine />
        </div>
        <div className="w-full mx-auto">
          <MainHeader />
        </div>
      </div>

      <MainBody />
    </div>
  );
};

export default Main;
