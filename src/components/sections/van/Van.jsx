import { useEffect, useState } from "react";

const Van = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div>
      {vans.map((element) => (
        <div key={element.id}>
          <img src={element.imageUrl} alt="element" />
          <p>{element.name}</p>
          <p>{element.price}</p>
          <p>{element.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Van;
