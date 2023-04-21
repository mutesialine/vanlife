import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="py-8 px-12 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-2xl md:text-4xl font-bold">
        <Link to="/" className="hover:underline">
          #VANLIFE
        </Link>
      </div>
      <div className="flex gap-4 text-lg font-semibold">
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
      </div>
    </div>
  );
};

export default NavBar;
