import { useEffect, useState } from "react";
import VanCard from "../../components/ui/VanCard";

const Van = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-6 md:px-24">
      <h2 className="text-3xl md:text-5xl font-bold pb-10">
        Explore our Vans options
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {vans.map((element) => (
          <VanCard {...element} key={element.id} />
        ))}
      </div>
    </div>
  );
};

export default Van;
