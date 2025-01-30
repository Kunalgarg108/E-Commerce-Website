import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { ShopContext } from '../context/Shopcontext';
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
  });
  const [showMenu, setShowMenu] = useState(false);
  const { setshowsearch, getcartcount } = useContext(ShopContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          isLoggedIn: true,
          name: user.displayName || "",
          email: user.email || "",
        });
      } else {
        setUser({
          isLoggedIn: false,
          name: "",
          email: "",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser({ isLoggedIn: false, name: "", email: "" });
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 font-bold text-lg">
      <img src={assets.logo} className="w-36" alt="logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-400">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            COLLECTION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"
              } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <FaSearch size={25} onClick={() => setshowsearch(true)} />
        <div className="relative group">
          <button>
            <CgProfile size={25} />
          </button>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
            <div className="flex flex-col gap-2 w-96 py-5 px-6 bg-slate-500 rounded-lg shadow-lg text-white">
              {user.isLoggedIn ? (
                <>
                  <div className="text-white pb-7">
                    <p className="font-bold text-2xl">{user.name}</p>
                    <p className="text-sm text-gray-100">{user.email}</p>
                  </div>
                  <NavLink
                    to="/profile"
                    className="hover:text-white hover:scale-105 transition duration-200"
                  >
                    My Profile
                  </NavLink>
                  <NavLink
                    to="/orders"
                    className="hover:text-white hover:scale-105 transition duration-200"
                  >
                    Orders
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="hover:text-white hover:scale-105 transition duration-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="hover:text-white hover:scale-105 transition duration-200"
                  >
                    Login
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <FaCartShopping size={25} />
          <p className="absolute top-[1.3rem] w-[1.1rem] text-center leading-4 bg-black text-white rounded-full text-[8px]">{getcartcount()}</p>
        </Link>
        <CiMenuBurger
          className="cursor-pointer sm:hidden text-gray-700"
          onClick={() => setShowMenu(true)}
        />

        {/* Dropdown Menu (hidden by default) */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-3/4 sm:w-1/2 bg-white z-50 shadow-lg transition-transform transform ${showMenu ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close Button */}
          <RxCross2 className="absolute top-4 right-4 text-gray-700" onClick={() => setShowMenu(false)} size={20} />


          {/* Menu Content */}
          <ul className="mt-16 px-6 space-y-4 text-gray-700 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 ${isActive ? "text-orange-700" : "hover:text-orange-700"}` 
                }
                onClick={() => setShowMenu(false)}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/collection"
                className={({ isActive }) =>
                  `block py-2 px-3 ${isActive ? "text-orange-700" : "hover:text-orange-700"}` 
                }
                onClick={() => setShowMenu(false)}
              >
                COLLECTION
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 ${isActive ? "text-orange-700" : "hover:text-orange-700"}` 
                }
                onClick={() => setShowMenu(false)}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 ${isActive ? "text-orange-700" : "hover:text-orange-700"}` 
                }
                onClick={() => setShowMenu(false)}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;