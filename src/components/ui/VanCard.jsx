import { Link } from "react-router-dom";

const VanCard = ({ imageUrl, name, price, type, id }) => {
  return (
    <Link to={`/vans/${id}`} className="hover:opacity-80">
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
          className={`px-8 py-2 rounded-md text-base font-semibold text-white  w-fit ${
            type === "simple"
              ? "bg-orange-500"
              : type === "rugged"
              ? "bg-green-700"
              : type === "luxury"
              ? "bg-black"
              : "bg-red-500"
          }`}
        >
          {type}
        </button>
      </div>
    </Link>
  );
};

export default VanCard;
