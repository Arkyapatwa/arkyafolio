"use client";
import Card from "./Card";


const Project = () => {
  return (
    <>
      <div id="projects" className="w-full h-screen flex justify-center">
        <div className="px-15 w-100 md:p-20 flex flex-col gap-10">
          <h1 className="text-5xl font-semibold text-center">
            <span className="text-blue-500">My</span> Works
          </h1>
          <div className="flex flex-col md:flex-row">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
