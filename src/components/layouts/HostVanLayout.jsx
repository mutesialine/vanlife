import { NavLink } from "react-router-dom";

const HostVanLayout = () => {
  return (
    <nav className="flex gap-x-4 md:gap-x-8 text-lg pt-6">
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
  );
};

export default HostVanLayout;
