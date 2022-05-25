import React from "react";
import SidebarFollow from "./SidebarFollow";
import SidebarHeader from "./SidebarHeader";
import SidebarProfile from "./SidebarProfile";
import { useSocialContext } from "../../context/SocialContext";

const Sidebar = () => {
  const { modal, toggleModal, sidebar } = useSocialContext();

  return (
    <div
      className={`${modal && "blur-sm"} ${
        sidebar ? "inline" : "hidden"
      } min-w-[318px] mt-5  lg:inline `}
    >
      <div className="flex flex-col">
        <SidebarHeader />
        <SidebarProfile />
        <SidebarFollow />
      </div>
    </div>
  );
};

export default Sidebar;
