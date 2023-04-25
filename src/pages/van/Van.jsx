import { useEffect, useState } from "react";
import VanCard from "../../components/ui/VanCard";
import { Link, useSearchParams } from "react-router-dom";

const Van = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((error) => console.log(error));
  }, []);
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-6 md:px-24 space-y-10">
      <h2 className="text-3xl md:text-5xl font-bold">
        Explore our Vans options
      </h2>
      <div className="flex gap-x-4 ">
        <Link
          to="."
          className="px-8 py-2 rounded-md text-base font-semibold text-amber-50 w-fit bg-gray-300"
        >
          Clear All
        </Link>
        <Link
          to="?type=simple"
          className="px-8 py-2 rounded-md text-base font-semibold text-amber-50 w-fit bg-orange-500"
        >
          Simple
        </Link>
        <Link
          to="?type=rugged"
          className="px-8 py-2 rounded-md text-base font-semibold text-amber-50 w-fit bg-teal-800"
        >
          Rugged
        </Link>
        <Link
          to="?type=luxury"
          className="px-8 py-2 rounded-md text-base font-semibold text-amber-50 w-fit bg-gray-900"
        >
          luxury
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {displayedVans.map((element) => (
          <VanCard {...element} key={element.id} />
        ))}
      </div>
    </div>
  );
};

export default Van;
