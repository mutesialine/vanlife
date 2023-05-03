import { Suspense } from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../Api";

export const loader = ({ params }) => {
  return defer({ van: getVans(params.id) });
};

const VanDetail = () => {
  const location = useLocation();
  const loadedvanDetails = useLoaderData();

  const search = location.state?.search || "null";
  const type = location.state?.type || "All";

  return (
    <div className="max-w-7xl mx-auto space-y-4 pt-16 pb-32 px-6 md:px-12">
      <Link to={`..${search}`} relative="path" className="text-2xl text-center">
        &larr;{" "}
        <span className="text-lg hover:underline">{`back to ${type} vans`}</span>
      </Link>
      <Suspense fallback={<h2>loading...</h2>}>
        <Await resolve={loadedvanDetails.van}>
          {(van) => (
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
          )}
        </Await>
      </Suspense>
    </div>
  );
};

export default VanDetail;
