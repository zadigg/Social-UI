import React from "react";
import cover from "../../img/cover.jpg";
import porfile from "../../img/profileImg.jpg";

const SidebarProfile = () => {
  return (
    <div className="mt-3 bg-[#FbFbFB] w-[290px] h-[322px] mx-auto rounded-2xl relative">
      <div className=" h-[108px] bg-green-300 w-full rounded-t-2xl ">
        {" "}
        <img src={cover} className="rounded-t-2xl" alt="" />
      </div>
      <div>
        <img
          src={porfile}
          className="absolute w-[98px] h-[98px] rounded-full   left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center mt-[61px] font-bold text-lg text-black">
          Zendata MJ
        </div>
        <div className="flex mt-2 justify-center text-[17px]">
          Senioy UI/UX Designer
        </div>
        <div className="mt-[10px]  w-[85%] mx-auto h-[79px] border-t-2 border-b-2 border-orange-200 relative ">
          <div className="absolute border-l-2 border-orange-200 left-[90px] h-[100%] top-0 "></div>
          <div className="absolute border-l-2 border-orange-200 left-[181px] h-[100%] top-0 "></div>
          <div className="flex justify-around mt-4">
            <div className="flex flex-col items-center   ">
              <div className="font-bold">6,890</div>
              <div className="text-gray-400">Following</div>
            </div>

            <div className="flex flex-col items-center  ">
              <div className="font-bold">1</div>
              <div className="text-gray-400">Followers</div>
            </div>
            <div className="flex flex-col items-center ">
              <div className="font-bold"> 3</div>
              <div className="text-gray-400">Posts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
