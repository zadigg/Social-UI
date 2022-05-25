import React from "react";
import TrendData from "../../Data/TrendData";
const WidgetBody = () => {
  return (
    <div className="bg-[#FbFbFB] h-[463px] mt-8 rounded-xl w-[322px] mx-auto pl-5 ">
      <div className="pt-3">Trends for you</div>
      <div className=" ">
        {TrendData.map((data, index) => {
          return (
            <div key={index}>
              <div className="font-bold mt-3">#{data.name}</div>
              <div className="mt-2 text-zinc-500">{data.shares}k shares</div>
            </div>
          );
        })}
      </div>

     
    </div>
  );
};

export default WidgetBody;
