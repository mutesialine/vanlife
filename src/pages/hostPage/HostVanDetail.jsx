import { useEffect, useState } from "react";
import { useParams } from "react-router";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);
  return (
    <div className="max-w-7xl mx-auto text-4xl pt-12 pb-24 px-24">
      {currentVan ? (
        <div className="flex flex-col md:flex-row md:items-center gap-x-12">
          <img src={currentVan.imageUrl} alt="element" className="w-[500px]" />
          <div className="space-y-8">
            <p className="bg-orange-500 p-2 text-white rounded-md text-center">
              {currentVan.type}
            </p>
            <h2 className="text-3xl font-bold">{currentVan.name}</h2>
            <p className=" flex  text-xl font-semibold">
              ${currentVan.price}
              <span>/day</span>
            </p>
          </div>
        </div>
      ) : (
        <p>djf</p>
      )}
    </div>
  );
};

export default HostVanDetail;
