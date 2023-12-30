import React, { useState } from "react";

const CardItem = ({ obj }) => {
  return (
    <div
      className="flex z-10 flex-col justify-center items-center shadow 
      hover:scale-75 transition duration-150 shadow-gray-900 rounded-lg p-2 md:m-2 m-0.5"
      style={{ background: obj.bkColor }}
    >
      <img
        className="md:w-10 w-6"
        src={obj.source}
        alt={obj.name ?? "Image"}
      />
      <h4 className="text-white md:mt-2 text-center font-bold md:text-lg">
        {obj.name ?? "Nombre"}
      </h4>
      <p>{obj.description}</p>
    </div>
  );
};

export default CardItem;
