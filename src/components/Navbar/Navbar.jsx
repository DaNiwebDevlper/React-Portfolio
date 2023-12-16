
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


// import './NavBar.scss'
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="app__navbar w-full backdrop-blur-sm bg-[#222]/40 sticky z-10 top-0 shadow-md shadow-[#333 z-20">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2 md:py-2 md:block">
            <Link to="/">
              <img
                src="/assets/logo.png"
                alt="Logo"
                className="w-[170px]"
              />
            </Link>
           
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#0abab4d0]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-[#0abab4d0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul
              className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 px-4 py-4 font-semibold rounded-full md:ml-[-70px]">
              <li
                className="text-black font-semibold text-[18px]
               hover:text-rose-800"
              >
                <NavLink
                  onClick={() => setNavbar(false)}
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0abab4d0] font-bold" : "text-gray-100"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  lg:border-0 hover:text-[#0abab4d0] lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-black font-[500] text-[18px] hover:text-[#0abab4d0]">
                <NavLink
                  to="/skills"
                  onClick={() => setNavbar(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0abab4d0] font-bold" : "text-gray-100"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0abab4d0] lg:p-0`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li className="text-black font-[500] text-[18px] hover:text-[#0abab4d0]">
                <NavLink
                  to="/projects"
                  onClick={() => setNavbar(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0abab4d0] font-bold" : "text-gray-100"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0abab4d0] lg:p-0`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="text-black font-[500] text-[18px] hover:text-[#0abab4d0]">
                <NavLink
                  to="/about"
                  onClick={() => setNavbar(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0abab4d0] font-bold" : "text-gray-100"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0abab4d0] lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="text-black font-[500] text-[18px] hover:text-[#0abab4d0]">
                <NavLink
                  to="/contact"
                  onClick={() => setNavbar(false)}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0abab4d0] font-bold" : "text-gray-100"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0abab4d0] lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
