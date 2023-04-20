import { useEffect, useState } from "react";
import { useParams } from "react-router";

const HostVanDetail = () => {
  const { id } = useParams;
  const [currentVan, setCurrentVan] = useState(null);
  useEffect(() => {
    fetch(`api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);
  return (
    <div className="max-w-7xl mx-auto text-4xl py-16 px-24">
      {currentVan ? (
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
          <img src={currentVan.imageUrl} alt="element" className="w-[500px]" />
          <div className="space-y-8">
            <p className="text-orange-500">{currentVan.type}</p>
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
