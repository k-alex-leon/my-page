import React, { useState } from "react";

const AppProjectCard = ({ project }) => {
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <article
      onPointerOver={() => setMouseIn(true)}
      onPointerLeave={() => setMouseIn(false)}
      onClick={() => {
        // abre nueva ventana al link del project
        window.open(project.link, "_blank");
      }}
      className="z-10 h-4/5 flex flex-col shadow relative shadow-white rounded-lg m-2"
    >
      <img
        className={`w-full h-full bottom-0 ${mouseIn && 'opacity-25'} transition duration-500 rounded-lg`}
        src={project.icon}
        alt={project.name ?? "Image"}
      />
      <div
        className={`${
          !mouseIn ? "collapse h-0 w-0" : "flex flex-col bottom-0 absolute bg-zinc-900 p-2 rounded-b-lg"} transition duration-500`}
      >
        <h4 className="text-indigo-800 mt-2 font-bold text-lg">
          {project.name ?? "Nombre"}
        </h4>
        <p>{project.description}</p>
      </div>
    </article>
  );
};

export default AppProjectCard;
