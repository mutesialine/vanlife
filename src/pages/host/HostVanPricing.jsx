import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { currentVan } = useOutletContext();
  return (
    <p className="flex text-xl font-semibold">
      ${currentVan.price}
      <span>/day</span>
    </p>
  );
};

export default HostVanPricing;
