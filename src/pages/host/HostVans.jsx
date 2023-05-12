import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../Utils";
import { HostVanElement } from "../../components/sections";

export const loader = async ({ request }) => {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
};

const HostVans = () => {
  const loadedVans = useLoaderData();

  return (
    <div className="flex flex-col gap-4 px-6 pt-16 pb-24 mx-auto max-w-7xl md:px-12">
      <h2 className="pb-4 text-4xl font-bold">Your listed Vans</h2>
      <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
        <Await resolve={loadedVans.vans}>
          {(vans) => <HostVanElement vans={vans} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default HostVans;
