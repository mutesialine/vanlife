import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../Utils";
import HostVanElement from "./HostVanElement";

export const loader = async ({ request }) => {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
};

const HostVans = () => {
  const loadedVans = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-6 md:px-12 flex flex-col gap-4">
      <h2 className="text-4xl font-bold pb-4">Your listed Vans</h2>
      <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
        <Await resolve={loadedVans.vans}>
          {(vans) => <HostVanElement vans={vans} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default HostVans;
