import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <>
      <nav className="flex gap-6 text-lg px-12 pt-6 max-w-7xl mx-auto">
        <NavLink
          to={"/host"}
          end
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : null
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"income"}
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : null
          }
        >
          Income
        </NavLink>
        <NavLink
          to={"vans"}
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : null
          }
        >
          Vans
        </NavLink>
        <NavLink
          to={"reviews"}
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : null
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
