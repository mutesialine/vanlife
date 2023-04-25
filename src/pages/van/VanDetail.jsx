import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const VanDetail = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto gap-8 py-16 px-6 md:px-12">
      <Link to=".." relative="path" className="text-2xl text-center">
        &larr; <span className="text-lg hover:underline">Back to all vans</span>
      </Link>
      {van ? (
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
          <img src={van.imageUrl} alt="element" className="w-[500px]" />
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center gap-x-5 gap-y-8 justify-between">
              <h2 className="text-3xl font-bold">{van.name}</h2>
              <p className=" flex  text-xl font-semibold">
                ${van.price}
                <span>/day</span>
              </p>
            </div>
            <h2 className="text-2xl font-semibold">{van.description}</h2>
            <p className="text-orange-500">{van.type}</p>
            <button className="px-8 py-2 rounded-md bg-orange-500 w-full md:w-fit text-white">
              Rent this van
            </button>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default VanDetail;
