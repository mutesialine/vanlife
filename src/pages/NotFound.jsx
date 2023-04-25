import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 md:pt-40 px-8 max-w-7xl mx-auto">
      <h2 className="text-6xl text-red-500 font-bold">
        404
        <span> PAGE not Found</span>
      </h2>
      <Link
        to="/"
        className="p-3 text-center text-black underline hover:opacity-80 text-base mt-10 "
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
