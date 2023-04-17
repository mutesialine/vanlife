import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url('/images/ezgif.com-gif-maker.webp')] w-full h-full bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center items-center text-white py-36">
        <h2 className="text-4xl">
          You got the travel plans, we got the travel vans.
        </h2>
        <p className="pt-6 text-lg">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="p-4 bg-orange-500 mt-14 w-1/2">Find your van</button>
      </div>
    </div>
  );
};

export default Hero;
