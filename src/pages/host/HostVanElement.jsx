import { Link } from "react-router-dom";

const HostVanElement = ({ vans }) => {
  return (
    <div className="flex flex-col md:flex-row ">
      {vans.map((van) => (
        <Link to={van.id} key={van.id} className="hover:opacity-80 ">
          <div
            className="flex flex-row md:flex-col items-center gap-4 w-full  px-4 py-2"
            key={van.id}
          >
            <img
              src={van.imageUrl}
              alt="Photo van"
              className="w-32 md:w-[400px]"
            />
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{van.name}</h3>
              <p className="text-sm md:text-lg">${van.price}/day</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HostVanElement;
