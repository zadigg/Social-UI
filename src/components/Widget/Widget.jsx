import React from "react";
import WidgetBody from "./WidgetBody";
import { useSocialContext } from "../../context/SocialContext";
import WidgetHeader from "./WidgetHeader";

const Widget = () => {
  const { modal, toggleModal } = useSocialContext();

  return (
    <div
      className={`${
        modal && "blur-sm"
      }  w-[361px]  ml-4 hidden lg:inline-block`}
    >
      <WidgetHeader />
      <WidgetBody />
    </div>
  );
};

export default Widget;
