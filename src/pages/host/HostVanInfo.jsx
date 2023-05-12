import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { currentVan } = useOutletContext();
  return (
    <div className="text-xl font-bold space-y-4">
      <h4>
        Name: <span className="font-normal">{currentVan.name}</span>
      </h4>
      <h4>
        Category: <span className="font-normal">{currentVan.type}</span>
      </h4>
      <h4>
        Description:{" "}
        <span className="font-normal">{currentVan.description}</span>
      </h4>
      <h4>
        Visibility: <span className="font-normal">Public</span>
      </h4>
    </div>
  );
};

export default HostVanInfo;
