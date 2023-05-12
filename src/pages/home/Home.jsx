import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="bg-[url('/images/ezgif.com-gif-maker.webp')] w-full h-full bg-no-repeat bg-cover">
        <div className="flex flex-col items-center text-center text-white py-16 md:pt-40 px-8 mt-0 max-w-7xl mx-auto">
          <h2 className="text-4xl">
            You got the travel plans, we got the travel vans.
          </h2>
          <p className="pt-6 text-lg">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link
            to="/vans"
            className="p-4 text-center bg-orange-500 hover:opacity-80 text-lg mt-10 w-1/2 rounded"
          >
            Find your van
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
