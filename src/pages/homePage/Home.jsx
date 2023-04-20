import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="bg-[url('/images/ezgif.com-gif-maker.webp')] w-full h-full bg-no-repeat bg-cover ">
        <div className="flex flex-col justify-center items-center text-white pt-56  px-8 mt-0 max-w-7xl mx-auto ">
          <h2 className="text-4xl">
            You got the travel plans, we got the travel vans.
          </h2>
          <p className="pt-6 text-lg">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link
            to={"/vans"}
            className="p-4 bg-orange-500 text-center hover:opacity-80 mt-14 md:w-1/2"
          >
            Find your van
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
