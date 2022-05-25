import React from "react";
import { useSocialContext } from "../../context/SocialContext";
import MainHeader from "../Main/MainHeader";
import { AiOutlineClose } from "react-icons/ai";

const Post = () => {
  const { modal, toggleModal } = useSocialContext();

  return (
    <div>
      {" "}
      <div className="mt-10  flex justify-center  ">
        <button
          onClick={toggleModal}
          className="text-xl hover:bg-orange-200 px-2 py-1 w-full rounded-xl cursor-pointer"
        >
          Share
        </button>
      </div>
      {modal && (
        <div className="absolute flex  top-[153px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[732px] h-[213px] bg-[#FbFbFB]  mx-auto">
          {" "}
          <div className="relative ">
            <div
              onClick={toggleModal}
              className="absolute left-[690px] top-[20px] cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="w-full mx-auto my-auto ">
            <div className="w-[80%] mx-auto">
              <MainHeader />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
