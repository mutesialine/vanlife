import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VanCard from "../../ui/VanCard";
const VanDetail = () => {
  const params = useParams();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  return (
    <div className="max-w-7xl mx-auto gap-8 py-16 px-24">
      {van ? (
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <img src={van.imageUrl} alt="element" className="w-[500px]" />
          <div className="space-y-8">
            <div className="flex items-center gap-x-4 justify-between">
              <h2 className="text-3xl font-bold">{van.name}</h2>
              <p className=" flex flex-col md:flex-row text-xl font-semibold">
                ${van.price}
                <span>/day</span>
              </p>
            </div>
            <h2 className="text-2xl font-semibold">{van.description}</h2>
            <button className="px-8 py-2 rounded-md bg-orange-500 w-fit">
              {van.type}
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
