import React from "react";

function Cards({ image, name }) {
  return (
    <div className="flex bg-white h-20 w-[220px] rounded-sm items-center p-2 shadow-md">
      <img src={image} height={40} width={40} alt="" />

      <span className="ml-2">{name}</span>
    </div>
  );
}

export default Cards;
