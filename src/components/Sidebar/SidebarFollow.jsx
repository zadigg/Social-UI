import React from "react";
import Followers from "../../Data/FollowerData";

const SidebarFollow = () => {
  return (
    <div className="mt-4 w-[290px] mx-auto  h-[252px] overflow-y-scroll scrollbar-hide">
      <div className="text-sm">Who is following you</div>

      {Followers.map((follower, index) => {
        return (
          <div key={index} className="mt-4 flex items-center justify-between ">
            <div className="flex items-center space-x-2">
              <div>
                <img src={follower.img} className="w-[55px] h-[55px]" alt="" />
              </div>
              <div className="">
                <div className="font-bold text-sm">{follower.name}</div>
                <div className="text-xs">{follower.username}</div>
              </div>
            </div>
            <div className="cursor-pointer hover:animate-bounce transition ease-in-out delay-150">
              Follow
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarFollow;
