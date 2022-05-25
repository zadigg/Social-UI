import React from "react";
import postPic from "../../img/postpic1.jpg";
import { BsFillHeartFill } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import { GrSend } from "react-icons/gr";
import PostsData from "../../Data/PostsData";
const MainBody = () => {
  return (
    <div className="">
      {PostsData.map((post, index) => {
        return (
          <div key={index} className="flex ">
            <div className="mt-[17px] bg-[#FbFbFB] rounded-xl mx-auto  ">
              <div className="w-[658px] pl-[18px]  ">
                <div className=" pt-3 ">
                  <img
                    src={post.img}
                    className="h-[321px] w-[624px] mt-1 object-cover"
                    alt=""
                  />
                </div>
                <div className="mt-3  flex space-x-7">
                  <BsFillHeartFill className="text-orange-500 text-2xl" />
                  <GoComment className=" text-2xl" />
                  <GrSend className=" text-2xl" />
                </div>
                <div className="text-gray-400 text-sm mt-5">2300 likes</div>
                <div className="text-gray-700 text-sm mt-4 items-center mb-3">
                  <span className="font-bold text-black mr-1 text-lg">
                    Tzuye
                  </span>
                  asdasdasdasd
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainBody;
