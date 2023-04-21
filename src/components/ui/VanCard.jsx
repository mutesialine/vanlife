import { Link } from "react-router-dom";

const VanCard = ({ imageUrl, name, price, type, id }) => {
  return (
    <Link to={`/vans/${id}`} className="hover:opacity-80">
      <div className="flex flex-col gap-y-3">
        <img src={imageUrl} alt="element" className="w-full md:w-[500px]" />
        <div className=" flex flex-col md:flex-row gap-2 md:justify-between">
          <h2 className="text-lg md:text-3xl font-bold">{name}</h2>
          <p className=" flex  flex-row md:flex-col text-xl font-semibold">
            ${price}
            <span>/day</span>
          </p>
        </div>
        <button className="px-8 py-2 rounded-md bg-orange-500 w-fit text-white">
          {type}
        </button>
      </div>
    </Link>
  );
};

export default VanCard;
