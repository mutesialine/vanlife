import { Suspense } from "react";
import { useLoaderData, Await, defer } from "react-router-dom";
import { getVans } from "../../api";
import { VanElement } from "../../components/sections";

export const loader = () => {
  return defer({ vans: getVans() });
};

const Van = () => {
  const dataPromise = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto pt-16 pb-32 px-6 md:px-24 space-y-10">
      <h2 className="text-3xl md:text-5xl font-bold">
        Explore our Vans options
      </h2>
      <Suspense fallback={<h1 className="text-2xl">Loading vans...</h1>}>
        <Await resolve={dataPromise.vans}>
          {(vans) => <VanElement vans={vans} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default Van;
