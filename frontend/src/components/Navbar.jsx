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
    <div className="flex items-center justify-between py-4 font-bold text-lg bg-[#0f1111] text-white px-6">
      <img src={assets.logo} className="w-36" alt="logo" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-400">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-100 hover:text-orange-500"}`
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-100 hover:text-orange-500"}`
            }
          >
            COLLECTION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-100 hover:text-orange-500"}`
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-500" : "text-gray-100 hover:text-orange-500"}`
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <FaSearch size={25} onClick={() => setshowsearch(true)} className="cursor-pointer text-white" />
        <div className="relative group">
          <button>
            <CgProfile size={25} className="text-white" />
          </button>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50">
            <div className="flex flex-col gap-2 w-96 py-5 px-6 bg-gray-800 rounded-lg shadow-lg text-white">
              {user.isLoggedIn ? (
                <>
                  <div className="text-white pb-7">
                    <p className="font-bold text-2xl">{user.name}</p>
                    <p className="text-sm text-gray-300">{user.email}</p>
                  </div>
                  <NavLink to="/profile" className="hover:text-orange-500">My Profile</NavLink>
                  <NavLink to="/orders" className="hover:text-orange-500">Orders</NavLink>
                  <button onClick={handleLogout} className="hover:text-red-500">Logout</button>
                </>
              ) : (
                <NavLink to="/login" className="hover:text-orange-500">Login</NavLink>
              )}
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <FaCartShopping size={25} className="text-white" />
          <p className="absolute top-[1.3rem] w-[1.1rem] text-center leading-4 bg-red-600 text-white rounded-full text-[8px]">{getcartcount()}</p>
        </Link>
        <CiMenuBurger className="cursor-pointer sm:hidden text-white" onClick={() => setShowMenu(true)} />
        <div className={`fixed top-0 right-0 bottom-0 w-3/4 sm:w-1/2 bg-gray-900 text-gray-100 z-50 shadow-lg transition-transform transform ${showMenu ? "translate-x-0" : "translate-x-full"}`}>
          <RxCross2 className="absolute top-4 right-4 text-white" onClick={() => setShowMenu(false)} size={20} />
          <ul className="mt-16 px-6 space-y-4">
            <li>
              <NavLink to="/" className={({ isActive }) => `block py-2 px-3 ${isActive ? "text-orange-500" : "hover:text-orange-500"}`} onClick={() => setShowMenu(false)}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/collection" className={({ isActive }) => `block py-2 px-3 ${isActive ? "text-orange-500" : "hover:text-orange-500"}`} onClick={() => setShowMenu(false)}>COLLECTION</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `block py-2 px-3 ${isActive ? "text-orange-500" : "hover:text-orange-500"}`} onClick={() => setShowMenu(false)}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `block py-2 px-3 ${isActive ? "text-orange-500" : "hover:text-orange-500"}`} onClick={() => setShowMenu(false)}>CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;