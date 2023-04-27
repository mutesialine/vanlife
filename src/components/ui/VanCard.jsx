import { Link } from "react-router-dom";

const VanCard = ({ imageUrl, name, price, type, id, state }) => {
  return (
    <Link to={id} state={state} className="hover:opacity-80">
      <div className="flex flex-col gap-y-2">
        <img src={imageUrl} alt="element" className="w-full md:w-[500px]" />
        <div className="flex flex-col md:flex-row gap-2 md:justify-between">
          <h2 className="text-lg md:text-xl font-bold">{name}</h2>
          <p className="flex flex-row md:flex-col text-xl font-bold">
            ${price}
            <span className="text-sm">/day</span>
          </p>
        </div>
        <button
          className={`px-8 py-2 rounded-md text-base font-semibold text-amber-50 w-fit hover:bg-red-500 capitalize ${
            type === "simple"
              ? "hover:bg-orange-800"
              : type === "rugged"
              ? "bg-teal-800"
              : type === "luxury"
              ? "bg-gray-900"
              : "none"
          }`}
        >
          {type}
        </button>
      </div>
    </Link>
  );
};

export default VanCard;
