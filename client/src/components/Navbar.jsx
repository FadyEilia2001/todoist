import { MenuUnfoldOutlined } from "@ant-design/icons";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";

const Navbar = () => {
  return (
    <nav className="container mx-auto h-24 md:p-4 flex items-center justify-between">
      <div className="flex place-items-center  gap-6">
        <div className="flex place-items-center  gap-2">
          <img src={Logo} className="w-10 ml-4 md:ml-0" alt="todoist" />
          <h2 className="text-3xl mt-2 text-red-600 hidden md:block">
            todoist
          </h2>
        </div>

        <div className="hidden md:block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-400 text-xl border-2 border-sky-500 p-4 font-medium"
                : "text-xl text-gray-500 font-medium p-4"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/templates"
            className={({ isActive }) =>
              isActive
                ? "text-red-400 text-xl border-2 border-sky-500 p-4 font-medium"
                : "text-xl text-gray-500 font-medium p-4"
            }
          >
            Templates
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive
                ? "text-red-400 text-xl border-2 border-sky-500 p-4 font-medium"
                : "text-xl text-gray-500 font-medium p-4"
            }
          >
            Pricing
          </NavLink>
        </div>
      </div>

      <div className="hidden md:flex">
        <Link to="/register" className="text-gray-500 ">
          <button className="rounded-xl cursor-pointer hidden lg:block py-3 px-12 mr-4 bg-transparent border border-red-500 w-56 text-xl text-gray-500 font-medium tracking-wide hover:scale-105 hover:text-red-700 transition-all">
            Log in
          </button>
        </Link>
        <Link to="/register" className="text-white">
          <button className="py-3 px-12 mr-4 bg-red-500 rounded-xl text-white border-none text-xl w-56 font-medium tracking-wide hover:bg-red-700 cursor-pointer hover:scale-105 transition-all ">
            Start for free
          </button>
        </Link>
      </div>

      <MenuUnfoldOutlined className="text-3xl mr-4 mt-3 cursor-pointer hover:text-red-500 transition-colors md:hidden" />
    </nav>
  );
};
export default Navbar;
