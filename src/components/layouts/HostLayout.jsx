import { Link, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="flex gap-6 text-lg px-36 pt-6">
        <Link to={"host"} className="hover:underline">
          Dashboard
        </Link>
        <Link to={"income"} className="hover:underline">
          Income
        </Link>
        <Link to={"reviews"} className="hover:underline">
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
