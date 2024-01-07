import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div id="Home" className="w-full h-screen relative flex flex-col">
        <Navbar />
        <div className="flex h-screen bg-custom1">
          <div className=" flex w-2/6 overflow-visible">
            <div className="flex flex-col h-3/6 my-auto pl-20 pt-10 overflow-visible">
              <div className="text-6xl font-semibold">Hi,</div>
              <div className="text-5xl ">I'm Arkya Patwa</div>
              <div className="text-5xl">A Software Engineer</div>
            </div>
          </div>

          <div className="bg-red-600 w-2/6 -ml-80 opacity-20 "></div>
        </div>
      </div>
    </>
  );
};

export default Home;
