import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const MobileNav = ({ user, isDropDownOpen, setIsDropDownOpen }) => {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3 relative">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        {user?.fullName ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 w-9 h-9 rounded-full"
            >
              <img
                src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-16 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                <button>Sign out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-400 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-24 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                <button>Sign In</button>
                <button>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const LargeNav = ({ user, isDropDownOpen, setIsDropDownOpen }) => {
  return (
    <div className="w-full items-center justify-between hidden lg:flex px-14">
      <div className="gap-4 items-center justify-around flex">
        <div className="w-20">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
        <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
          <span className="text-zomato-400">
            <HiLocationMarker />
          </span>
          <input
            type="text"
            placeholder="Delhi NCR"
            className="w-full focus:outline-none "
          />
          <IoMdArrowDropdown />
        </div>
        <div className="flex w-full items-center gap-2">
          <RiSearch2Line />
          <input
            type="search"
            placeholder="Search for restaurants, cuisine or a dish"
            className="w-full focus:outline-none
            "
          />
        </div>
      </div>
      <div className="flex items-center gap-3 relative">
        {user?.fullName ? (
          <>
            <div
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border border-gray-300 text-zomato-400 w-9 h-9 rounded-full"
            >
              <img
                src="https://cdn3.vectorstock.com/i/1000x1000/00/92/teen-boy-character-avatar-vector-11360092.jpg"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-16 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                <button>Sign out</button>
              </div>
            )}
          </>
        ) : (
          <>
            <span
              onClick={() => setIsDropDownOpen((prev) => !prev)}
              className="border p-2 border-gray-400 rounded-full"
            >
              <FaUserAlt className="w-full h-full" />
            </span>
            {isDropDownOpen && (
              <div className="absolute shadow-lg py-3 -bottom-24 -right-0 w-36 z-20 flex flex-col gap-2 bg-white border border-gray-200">
                <button>Sign In</button>
                <button>Sign Up</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const user = {
    fullName: "Daksh",
  };
  return (
    <>
      <nav className="p-4 lg:py-2 flex bg-white shadow-md lg:border-b-2 border-gray-200 w-full items-center">
        <MobileNav
          user={user}
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
        />
        <LargeNav
          user={user}
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
        />
      </nav>
    </>
  );
};

export default Navbar;
