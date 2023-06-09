import { Suspense } from "react";
import { Await, Link, Outlet, defer, useLoaderData } from "react-router-dom";
import { HostVanLayout } from "../../components/layouts";
import { getVan } from "../../api";
import { requireAuth } from "../../Utils";

export const loader = async ({ params, request }) => {
  await requireAuth(request);
  return defer({ currentVan: getVan(params.id) });
};

const HostVanDetail = () => {
  const loadedVan = useLoaderData();
  return (
    <div className="px-6 pt-12 mx-auto mt-6 space-y-4 max-w-7xl pb-28 md:px-24 bg-orange-50">
      <Link to="/host/vans" className="text-2xl text-center">
        &larr; <span className="text-lg hover:underline">Back to all vans</span>
      </Link>
      <Suspense fallback={<h2>loading..</h2>}>
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
                  <p className="py-2 text-2xl text-white bg-orange-500 rounded-md px-28 w-fit ">
                    {currentVan.type}
                  </p>
                  <h2 className="text-3xl font-bold">{currentVan.name}</h2>
                  <p className="flex text-xl font-semibold ">
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
      </Suspense>
    </div>
  );
};

export default HostVanDetail;
