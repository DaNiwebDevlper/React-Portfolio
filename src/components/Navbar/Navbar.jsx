
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";



const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full backdrop-blur-md bg-[#111]/40 sticky  z-50 top-0">
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

              {NavLinks.map((navLink, i) => (
                <li
                  className="text-black font-semibold text-[18px]
               hover:text-rose-800"
                  key={i}>
                  <NavLink
                    onClick={() => setNavbar(false)}
                    to={navLink.path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#0abab4d0] font-bold" : "text-gray-100"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent  lg:border-0 hover:text-[#0abab4d0] lg:p-0`
                    }
                  >
                    {navLink.name}
                  </NavLink>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
