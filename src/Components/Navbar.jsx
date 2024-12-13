import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="navbar shadow-sm px-4">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img
            className="w-12 h-12 bg-red-300 rounded-full"
            src="https://i.ibb.co.com/vkjr5m7/movies-icons.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className="hover:text-primary">
              All Movies
            </Link>
          </li>
          <li>
            <Link to="/add-movie" className="hover:text-primary">
              Add Movie
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="hover:text-primary">
              My Favorites
            </Link>
          </li>
          <li>
            <Link to="/extras" className="hover:text-primary">
              Extra Route
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-none">
  <div className="flex items-center space-x-4">
    {user ? (
      <>
        {/* Show Avatar and User Info Dropdown */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
            data-tip={user.displayName || "User"}
          >
            <div className="w-10 rounded-full">
              <img
                src={user.photoURL || "Not available "}
                alt="User"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-52"
          >
            <li>
              <span className="font-bold text-gray-300">
                {user.displayName || "User"}
              </span>
            </li>
          </ul>
        </div>
        
        {/* Logout Button */}
        <button
          className="btn btn-md btn-error text-white rounded-md"
          onClick={logOut}
        >
          Logout
        </button>
        <Link to="/register" className="btn btn-md btn-secondary">
          Register
        </Link>
      </>
    ) : (
      <>
        {/* Show Login and Register Buttons */}
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


    </nav>
  );
};

export default Navbar;
