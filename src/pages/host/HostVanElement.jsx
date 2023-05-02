import { Link } from "react-router-dom";

const HostVanElement = ({ vans }) => {
  return vans.map((van) => (
    <Link to={van.id} key={van.id} className="hover:opacity-80">
      <div
        className="flex items-center gap-x-4 w-full md:w-1/2 px-4 py-2"
        key={van.id}
      >
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} className="w-32" />
        <div className="space-y-4">
          <h3 className="text-xl font-bold">{van.name}</h3>
          <p className="text-sm md:text-lg">${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));
};

export default HostVanElement;
