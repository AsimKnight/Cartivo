import React, { useEffect, useState } from "react";

const FeaturedProductSection = ({ products }) => {
  const [featuredProductList, setFeaturedProductList] = useState([]);
  console.log("inside product section");
  console.log(products);

  useEffect(() => {
    setFeaturedProductList(
      products.filter((el) => {
        return el.price > 120;
      }),
    );
  }, [products]);
  console.log(featuredProductList);

  return (
    <div className="mx-auto  px-2">
      <div>
        <h2 className="mb-3 font-semibold  text-[clamp(1.25rem,1.7vw,3rem)] px-2">
          Featured Products
        </h2>
      </div>
      <div className="flex flex-wrap justify-around gap-2 mx-auto ">
        {featuredProductList.map((el) => {
          return (
            <div className="h-70 w-[48%]  rounded-xl shadow-sm md:w-[32%] ">
              <div className="h-[70%]">
                <img
                  className="w-full h-full object-contain bg-amber-50 rounded-t-xl"
                  src={el.images[0]}
                  alt={el.name + "-image"}
                />
              </div>
              <div className="h-[30%] w-full bg-mauve-50 px-2 flex flex-col rounded-b-xl">
                <span className="mt-3 font-semibold text-base md:text-[1.3rem] mb-2">
                  {el.title.slice(0, 18)}
                </span>
                <span className="font-semibold ">
                  ₨{" "}
                  <span className="border-b-2 border-green-400 bg-green-100 rounded-md px-2 py-1">
                    {(Math.floor(el.price) * 95).toLocaleString({
                      currency: "india",
                    })}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProductSection;
