import { NavLink, Outlet } from "react-router-dom";

const HostVanLayout = () => {
  return (
    <>
      <nav className="flex gap-6 text-lg px-12 pt-6 max-w-7xl mx-auto">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : null
          }
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : null
          }
        >
          pricing
        </NavLink>
        <NavLink
          to="photos"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : null
          }
        >
          Photos
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostVanLayout;
