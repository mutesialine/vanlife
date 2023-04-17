import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="py-8 px-12 flex justify-between items-center max-w-7xl mx-auto">
      <div className="text-4xl font-bold">
        <Link to={"/"} className="hover:underline">
          #VANLIFE
        </Link>
      </div>
      <div className="flex gap-4 text-lg">
        <Link to={"/about"} className="hover:underline">
          About
        </Link>
        <Link>Van</Link>
      </div>
    </div>
  );
};

export default NavBar;
