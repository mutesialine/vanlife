import { useSearchParams } from "react-router-dom";
import VanCard from "../../components/ui/VanCard";

const VanElement = ({ vans }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <>
      <div className="flex gap-x-4 ">
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`px-8 py-2 rounded-md text-base font-semibold text-gray-900 w-fit bg-amber-100 ${
            typeFilter === "simple" ? "bg-orange-600 text-white" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`px-8 py-2 rounded-md text-base font-semibold text-gray-900 w-fit bg-amber-100 ${
            typeFilter === "rugged" ? "bg-teal-700 text-white" : ""
          }`}
        >
          Rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`px-8 py-2 rounded-md text-base font-semibold text-gray-900 w-fit bg-amber-100 ${
            typeFilter === "luxury" ? "bg-gray-800 text-white" : ""
          }`}
        >
          luxury
        </button>
        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className="px-8 py-2 rounded-md text-base font-semibold text-amber-600 w-fit underline"
          >
            Clear Filter
          </button>
        ) : null}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {displayedVans.map((element) => (
          <VanCard
            {...element}
            key={element.id}
            state={{
              search: `?${searchParams.toString()}`,
              type: typeFilter,
            }}
          />
        ))}
      </div>
    </>
  );
};
export default VanElement;
