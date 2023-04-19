import React from "react";

const VanCard = ({ imageUrl, name, price, type }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <img src={imageUrl} alt="element" className="w-[500px]" />
      <div className="flex items-center gap-x-4 justify-between">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className=" flex flex-col text-xl font-semibold">
          ${price}
          <span>/day</span>
        </p>
      </div>
      <button className="px-8 py-2 rounded-md bg-orange-500 w-fit text-white">
        {type}
      </button>
    </div>
  );
};

export default VanCard;
