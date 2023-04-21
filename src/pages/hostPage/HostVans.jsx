import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
  return (
    <div className="max-w-7xl mx-auto pt-6 pb-24 px-6 md:px-24 flex flex-col gap-4  ">
      <h2 className="text-4xl font-bold pb-4">Your listed Vans</h2>
      {vans.length > 0 ? (
        vans.map((van) => (
          <Link
            to={`/host/vans/${van.id}`}
            key={van.id}
            className="hover:opacity-80"
          >
            <div
              className="flex items-center gap-x-4 w-1/2 bg-white p-4"
              key={van.id}
            >
              <img
                src={van.imageUrl}
                alt={`Photo of ${van.name}`}
                className="w-32"
              />
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{van.name}</h3>
                <p className="text-sm md:text-lg">${van.price}/day</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default HostVans;
