import { useEffect, useState } from "react";
import VanCard from "../../ui/VanCard";

const Van = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-16 px-24">
      {vans.map((element) => (
        <VanCard {...element} key={element.id} />
      ))}
    </div>
  );
};

export default Van;
