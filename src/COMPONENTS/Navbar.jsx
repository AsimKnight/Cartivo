import { Heart, ShoppingBag, User, Menu, Search, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = ({ isManuOpen, setisManuOpen }) => {
  const [search, setSearch] = useState("");
  function handleManuClick() {
    setisManuOpen((state) => !state);
    console.log(isManuOpen);
  }

  return (
    <>
      {/* <div className=" w-full flex  bg-[#FFFFFF] py-5 px-2 items-center justify-between gap-3 before:absolute before:top-14 before:left-0 before:bg-blue-500 before:h-10 before:w-25 "> */}
      <div className="fixed top-0 w-full flex  bg-[#FFFFFF] py-5 px-2 items-center justify-between gap-3 ">
        <div
          className={` md:hidden -translate-x-25 transition text-green-900  font-semibold absolute top-18 left-0 w-25 h-[200vh] bg-green-100 ${isManuOpen ? "translate-x-0" : ""}`}
        >
          <div className="ml-3 mt-4 ">
            <h2>Shop</h2>
            <h2>New Arrivals</h2>
            <h2>Deals</h2>
            <h2>Categories</h2>
          </div>
        </div>
        <div className="md:hidden" onClick={handleManuClick}>
          {isManuOpen ? <X /> : <Menu />}
        </div>
        <div className=" sm:text-red-500 lg:text-purple-500 text-blue-500 font-bold text-2xl md:ml-5">
          Cartivo
        </div>
        <div className="hidden text-gray-600 md:flex italic gap-5 lg:gap-10 md:font-normal md:text-lg font-semibold text-xl items-center">
          <h2 className=" hover:text-stone-700 hover:border-b-2  hover:border-amber-300 cursor-pointer ">
            Shop
          </h2>
          <h2 className=" hover:text-stone-700 hover:border-b-2 hover:border-amber-300 cursor-pointer">
            New Arrivals
          </h2>
          <h2 className=" hover:text-stone-700 hover:border-b-2 hover:border-amber-300 cursor-pointer">
            Deals
          </h2>
          <h2 className=" hover:text-stone-700 hover:border-b-2 hover:border-amber-300 cursor-pointer">
            Categories
          </h2>
        </div>
        {/* <div>
          <input
            className="max-w-25 border rounded-full py-1 pl-3"
            type="text"
            placeholder={"Search"}
          />
        </div> */}
        <div className="relative">
          {search === "" && (
            <Search
              size={18}
              className=" absolute left-2 top-1/2 -translate-y-1/2 text-gray-400  "
            />
          )}

          <input
            className={`w-28 border rounded-full py-1 pl-4 pr-2 md:w-50 lg:w-80 ${search === "" ? "pl-7" : ""} `}
            type="text"
            placeholder="Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-3 mr-2">
          <span>
            <ShoppingBag />
          </span>
          <span>
            <Heart />
          </span>
          <span>
            <User />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
