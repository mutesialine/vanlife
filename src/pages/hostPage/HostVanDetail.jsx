import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router";
import { Link } from "react-router-dom";
import { HostVanLayout } from "../../components/layouts";

const HostVanDetail = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);
  return (
    <div className="max-w-7xl mx-auto pt-12 pb-24 px-6 md:px-24 space-y-4">
      <Link to=".." relative="path" className="text-2xl text-center">
        &larr; <span className="text-lg hover:underline">Back to all vans</span>
      </Link>
      {currentVan ? (
        <div className="flex flex-col md:flex-row md:items-center gap-x-12 gap-y-6">
          <img src={currentVan.imageUrl} alt="element" className="w-[400px]" />
          <div className="space-y-8 text-3xl">
            <p className="bg-orange-500 py-2 text-white rounded-md text-center ">
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
        <p>Loading</p>
      )}
      <HostVanLayout />
      <Outlet />
    </div>
  );
};

export default HostVanDetail;
