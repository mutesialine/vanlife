import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { currentVan } = useOutletContext();
  return <img src={currentVan.imageUrl} alt="element" className="w-[100px]" />;
};

export default HostVanPhotos;
