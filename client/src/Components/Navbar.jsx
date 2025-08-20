import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigation = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <nav className="relative bg-white shadow">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* Logo + Mobile Menu Button */}
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="text-2xl font-bold text-sky-700">Health</h1>
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 hover:text-gray-600 
                dark:hover:text-gray-400 focus:outline-none"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  /* Hamburger */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  /* Close */
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Links + Profile */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all 
            duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 
            lg:top-0 lg:relative lg:bg-transparent lg:w-auto 
            lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center 
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full lg:opacity-100"}`}
          >
            {/* Menu links */}
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 gap-8">
              <NavLink className="uppercase hover:border-b-1" to="/">
                Home
              </NavLink>
              <NavLink
                className="uppercase hover:border-b-1"
                to="/all-doctors"
              >
                All Doctors
              </NavLink>
              <NavLink className="uppercase hover:border-b-1" to="/about">
                About
              </NavLink>
              <NavLink className="uppercase hover:border-b-1" to="/contact">
                Contact
              </NavLink>
            </div>

            {/* Profile / Login */}
            <div className="flex items-center gap-4">
              {token ? (
                <div className="relative group">
                  {/* Avatar */}
                  <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full cursor-pointer">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                      className="object-cover w-full h-full"
                      alt="avatar"
                    />
                  </div>

                  {/* Dropdown (hidden until hover) */}
                  <div className="absolute right-0 w-40 mt-2 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
                    <ul className="py-2 text-gray-700">
                      <li
                      onClick={()=>navigation('/my-profile')} 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        My Profile
                      </li>
                      <li 
                      onClick={()=>navigation('/my-appointments')}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        My Appointment
                      </li>
                      <li
                      onClick={()=>setToken(false)} 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Logout
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => navigation("/login")}
                  className="bg-blue-500 text-white px-8 py-2 rounded-full"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
