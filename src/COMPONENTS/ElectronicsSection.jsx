import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

const ElectronicsSection = () => {
  const [smartphonesData, setSmartphonesData] = useState([]);
  useEffect(() => {
    async function fetchSmartphones() {
      const res = await fetch(
        "https://dummyjson.com/products/category/smartphones",
      );
      const data = await res.json();
      console.log(data.products);
      setSmartphonesData(data.products);
    }
    fetchSmartphones();
  }, []);
  return (
    <div className="">
      <div className="">
        <h2 className="mb-3 font-semibold  text-[clamp(1.25rem,1.7vw,3rem)] px-2 mt-5 ">
          Best Selling Smartphones
        </h2>
      </div>
      <div className=" px-2 flex gap-2 overflow-x-auto shadow-sm pb-2   ">
        {smartphonesData
          .map((el) => {
            return (
              <div className="h-75 w-[40%] shadow-2xl shrink-0 rounded-b-xl ">
                <div className="h-[60%] w-full  p-1">
                  <img
                    className=" w-full h-full object-cover "
                    src={el.images[0]}
                    alt={el.title + "-img"}
                  />
                </div>
                <div className=" pl-2 flex flex-col h-[40%] w-full rounded-b-xl ">
                  <span className="text-[1rem] font-semibold">
                    {el.title.slice(0, 13)}
                  </span>
                  <div className="flex gap-3 items-center mt-0.5 mb-1">
                    <span className="font-semibold    py-0.5 rounded-md flex gap-1 items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {el.rating.toFixed(1)}
                      <span className="font-normal"> Ratings</span>
                    </span>
                  </div>
                  <span className="px-1 bg-blue-200 rounded-md w-fit mb-1">
                    {el.brand}
                  </span>
                  <span className="font-bold">
                    <span className="font-medium">₨ </span>
                    {Math.floor(el.price * 96).toLocaleString({
                      currency: "india",
                    })}
                  </span>
                </div>
              </div>
            );
          })
          .slice(0, 10)}
      </div>
    </div>
  );
};

export default ElectronicsSection;
