import React from "react";
import Main from "../components/Main/Main";
import Post from "../components/Modal/Post";
import Sidebar from "../components/Sidebar/Sidebar";
import Widget from "../components/Widget/Widget";

const Home = () => {
  return (
    <div className={` flex w-full h-[100vh] xl:max-w-6xl xl:mx-auto relative `}>
      <Sidebar className=" " />
      <Main className="" />

      <div>
        <div></div>
        <div>
          <Widget className="" />
        </div>
        <div className="hidden lg:inline items-center">
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Home;
