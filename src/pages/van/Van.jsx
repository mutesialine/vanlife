import { useLoaderData, defer, Await } from "react-router-dom";
import { getVans } from "../../Api";
import VanElement from "./VanElement";

export const loader = () => {
  return defer({ vans: getVans() });
};

const Van = () => {
  const dataPromise = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-6 md:px-24 space-y-10">
      <h2 className="text-3xl md:text-5xl font-bold">
        Explore our Vans options
      </h2>
      <Await resolve={dataPromise.vans}>
        {(vans) => <VanElement vans={vans} />}
      </Await>
    </div>
  );
};

export default Van;
