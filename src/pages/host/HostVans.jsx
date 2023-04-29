import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../Api";
import { requireAuth } from "../../Utils";

export const loader = async ({ request }) => {
  await requireAuth(request);
  return getHostVans();
};

const HostVans = () => {
  const vans = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-6 md:px-12 flex flex-col gap-4">
      <h2 className="text-4xl font-bold pb-4">Your listed Vans</h2>
      {vans.length > 0 ? (
        vans.map((van) => (
          <Link to={van.id} key={van.id} className="hover:opacity-80">
            <div
              className="flex items-center gap-x-4 w-full md:w-1/2 px-4 py-2"
              key={van.id}
            >
              <img
                src={van.imageUrl}
                alt={`Photo of ${van.name}`}
                className="w-32"
              />
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{van.name}</h3>
                <p className="text-sm md:text-lg">${van.price}/day</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-4xl">Loading...</p>
      )}
    </div>
  );
};

export default HostVans;
