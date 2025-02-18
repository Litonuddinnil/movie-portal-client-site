import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";  
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("winter");

  const toggleTheme = () => {
    const newTheme = theme === "winter" ? "black" : "winter";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
     
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-primary">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact={true} to="/movies" className="hover:text-primary">
          All Movies
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-movie" className="hover:text-primary">
          Add Movie
        </NavLink>
      </li>
      <li>
        <NavLink to="/favorites" className="hover:text-primary">
          My Favorites
        </NavLink>
      </li>
      <li>
        <NavLink to="/faq" className="hover:text-primary">
           FAQ
        </NavLink>
      </li>
    </>
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar shadow-sm px-4">
      <div className="flex-1 p-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img
            className="w-20 md:w-24 h-20 md:h-24 bg-red-300 rounded-full"
            src="https://i.ibb.co.com/6bRJ4fk/eclipse.webp"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>

      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="menu menu-compact space-y-2 p-4  shadow-md rounded-lg">
          {links}
        </ul>
      </div>

      <div className="flex-none">
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <button
                className="btn btn-md btn-error text-white rounded-md"
                onClick={logOut}
              >
                Logout
              </button>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                  data-tip={user.displayName || "User"}
                >
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL || "Not available"} alt="User" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-52"
                >
                  <li>
                    <span className="font-bold ">
                      {user.displayName || "User"}
                    </span>
                  </li>
                </ul>
                
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-md btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-md btn-secondary">
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Show Hamburger Icon Only If User is Logged In */}
      {user && (
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="btn btn-ghost text-primary">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      )}
      <button
          onClick={toggleTheme}
          className="btn btn-error flex items-center ml-2"
        >
          {theme === "winter" ? <FaMoon /> : <FaSun />} 
        </button>
    </nav>
  );
};

export default Navbar;
