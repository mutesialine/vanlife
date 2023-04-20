import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VanCard from "../../components/ui/VanCard";

const Van = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 py-16 px-24">
      {vans.map((element) => (
        <Link to={`/van/${element.id}`} className="hover:opacity-80">
          <VanCard {...element} key={element.id} />
        </Link>
      ))}
    </div>
  );
};

export default Van;
