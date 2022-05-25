import React from "react";
import { BiMailSend } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { RiSnapchatLine } from "react-icons/ri";
import { BsChatLeftDots } from "react-icons/bs";

const WidgetHeader = () => {
  return (
    <div className="mt-6 flex items-center space-x-[60px] pl-5">
      <BiMailSend className="text-3xl text-orange-500" />
      <AiOutlineSetting className="text-3xl" />
      <RiSnapchatLine className="text-3xl" />
      <BsChatLeftDots className="text-3xl" />
    </div>
  );
};

export default WidgetHeader;
