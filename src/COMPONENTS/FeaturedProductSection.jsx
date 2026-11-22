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
  }, []);
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
            <div className="h-70 w-[48%]  rounded-lg">
              <div className="h-[70%]">
                <img
                  className="w-full h-full object-contain bg-cyan-50 rounded-t-lg"
                  src={el.images[0]}
                  alt={el.name + "-image"}
                />
              </div>
              <div className="h-[30%] w-full bg-mauve-50 px-2 flex flex-col rounded-b-lg">
                <span className="mt-3 font-semibold text-base md:text-[1.3rem]">
                  {el.title.slice(0, 18)}
                </span>
                <span className="font-medium ">
                  ₨{" "}
                  <span className="border-b-2 border-green-400">
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
