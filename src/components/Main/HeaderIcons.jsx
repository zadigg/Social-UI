import React from "react";

const HeaderIcons = ({ Icon, title, color }) => {
  return (
    <div className="flex items-center">
      {" "}
      <Icon className={`h-6 w-6 ${color}`} />
      <p className="hidden text-base font-light group-hover:text-twitter md:inline-flex ">
        {title}
      </p>
    </div>
  );
};

export default HeaderIcons;
