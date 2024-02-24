"use client";
import Card from "./Card";


const Project = () => {

  const projects: any[] = [
    {
      name: "DumpDrive",
      description: "An Online File Storage System where users can store, delete, rename files with security Authentication.",
      live: true,
      githubLink: "https://github.com/Arkyapatwa/dumpDrive",
      liveLink: "https://dump-drive.vercel.app/",
      photoLink: ""
    },
    {
      name: "MovieZone",
      description: "A Backend System where a user can book Seats for the available movies selecting their desired hall and screen.",
      live: false,
      githubLink: "https://github.com/Arkyapatwa/Moviezone_Server",
      liveLink: "",
      photoLink: ""
    },
  ]

  return (
    <>
      <div id="projects" className="w-full h-screen flex justify-center">
        <div className="px-15 w-100 md:p-20 flex flex-col gap-10">
          <h1 className="text-5xl font-semibold text-center">
            <span className="text-blue-500">My</span> Works
          </h1>
          <div className="flex flex-col md:flex-row gap-10 md:gap-0">
            <Card projects={projects}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
