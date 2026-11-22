import React from "react";

const CategoriesSection = ({ categories }) => {
  return (
    <div className="my-5  px-2 py-2">
      <h2 className="mb-3 font-semibold  text-[clamp(1.25rem,1.7vw,3rem)] px-2">
        Shop By Categories
      </h2>
      <div className="overflow-x-auto w-full flex md:flex-wrap   gap-3   ">
        {categories.map((el) => (
          <div className="shrink-0 w-[90%] h-70  bg-mauve-100 rounded-xl md:w-[49%] lg:w-[24%] lg:hover:scale-102 lg:transition-all">
            <div className=" w-full h-[80%] ">
              <img
                className="w-full h-full object-cover rounded-t-xl"
                src={el.imageUrl}
                alt={el.name + "-image"}
              />
            </div>
            <span className="flex justify-center items-center mt-3 font-semibold text-xl">
              {el.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
