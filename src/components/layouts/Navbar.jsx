import { NavLink, Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const NavBar = () => {
  return (
    <div className="py-8 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-2xl md:text-4xl font-bold">
        <Link to="/" className="hover:underline">
          #VANLIFE
        </Link>
      </div>
      <div className="flex gap-x-4 md:gap-x-8 text-lg font-semibold">
        <NavLink
          to="host"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : null
          }
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : null
          }
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold underline" : null
          }
        >
          Vans
        </NavLink>
        <Link to="login">
          <CgProfile size={24} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
