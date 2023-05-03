import { Await, Link, Outlet, defer, useLoaderData } from "react-router-dom";
import { HostVanLayout } from "../../components/layouts";
import { getHostVans } from "../../Api";
import { requireAuth } from "../../Utils";

export const loader = async ({ params, request }) => {
  await requireAuth(request);
  return defer({ currentVan: getHostVans(params.id) });
};

const HostVanDetail = () => {
  const loadedVan = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto pt-12 pb-24 px-6 md:px-24 space-y-4 mt-6 bg-white">
      <Link to="/host/vans" className="text-2xl text-center">
        &larr; <span className="text-lg hover:underline">Back to all vans</span>
      </Link>
      <Await resolve={loadedVan.currentVan}>
        {(currentVan) => (
          <>
            <div className="flex flex-col md:flex-row md:items-center gap-x-12 gap-y-6">
              <img
                src={currentVan.imageUrl}
                alt="element"
                className="w-[300px]"
              />
              <div className="space-y-8 text-3xl">
                <p className="bg-orange-500 py-2 px-28 w-fit text-white rounded-md text-2xl ">
                  {currentVan.type}
                </p>
                <h2 className="text-3xl font-bold">{currentVan.name}</h2>
                <p className=" flex  text-xl font-semibold">
                  ${currentVan.price}
                  <span>/day</span>
                </p>
              </div>
            </div>
            <HostVanLayout />
            <Outlet context={{ currentVan }} />
          </>
        )}
      </Await>
    </div>
  );
};

export default HostVanDetail;
