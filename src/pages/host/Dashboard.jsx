import { Suspense } from "react";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { requireAuth } from "../../Utils";
import { getHostVans } from "../../api";
import HostVanElement from "../../components/sections/HostVanElement";

export const loader = async ({ request }) => {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
};

const Dashboard = () => {
  const loadedData = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto text-4xl pt-16 pb-32 px-6 md:px-12">
      <section className="p-6 bg-orange-300 flex justify-between">
        <div className="space-y-8">
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <p className="text-lg flex ">
            Income last <span>30 days</span>
          </p>
          <h2 className="text-3xl font-bold">$2,260</h2>
        </div>
        <Link to="income" className="text-xl font-bold hover:underline">
          Details
        </Link>
      </section>
      <section className="bg-orange-100 flex justify-between p-6">
        <div className="flex items-center gap-x-2">
          <h2 className="text-2xl">Review score</h2>
          <p className="text-lg">
            <span>5.0</span>/5
          </p>
        </div>

        <Link to="reviews" className="text-xl font-bold hover:underline">
          Details
        </Link>
      </section>
      <section className=" pt-12">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold ">Your listed vans</h2>
          <Link to="vans" className="underline text-xl">
            View all
          </Link>
        </div>
      </section>
      <section className="pt-12">
        <Suspense fallback={<h1 className="text-2xl">Loading...</h1>}>
          <Await resolve={loadedData.vans}>
            {(vans) => <HostVanElement vans={vans} />}
          </Await>
        </Suspense>
      </section>
    </div>
  );
};
export default Dashboard;
