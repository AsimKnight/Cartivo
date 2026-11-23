import React, { useRef } from "react";

import { ArrowRight, ArrowLeft, Star } from "lucide-react";

const BestDeals = ({ deals, setDeals }) => {
  const dealsContainerRef = useRef(null);

  function slideLeft() {
    const slider = dealsContainerRef.current;
    const card = slider.querySelector(".deals-card");

    slider.scrollBy({
      left: (card.offsetWidth + 16) * 2,
      behavior: "smooth",
    });
  }

  function slideRight() {
    const slider = dealsContainerRef.current;
    const card = slider.querySelector(".deals-card");

    slider.scrollBy({
      left: -((card.offsetWidth + 16) * 2),
      behavior: "smooth",
    });
  }
  return (
    <div className="my-5  px-2 py-2">
      <div className="flex justify-between mr-2">
        <h2 className="mb-3 font-semibold  text-[clamp(1.25rem,1.7vw,3rem)] px-2">
          Todays Best Deals
        </h2>
        <div className="flex gap-2 md:hidden">
          <ArrowLeft onClick={slideRight} />
          <ArrowRight onClick={slideLeft} />
        </div>
      </div>
      <div
        ref={dealsContainerRef}
        className=" py-3 overflow-x-auto overflow-y-hidden w-full flex md:flex-wrap gap-3"
      >
        {deals?.map((el) => (
          <div className=" shadow-sm deals-card  shrink-0 w-[45%] h-75  bg-mauve-50 rounded-xl md:w-[32%] lg:w-[24%] lg:hover:scale-102 lg:transition-all">
            <div className=" w-full h-[55%] md:h-[60%]">
              <img
                className="w-full h-full  object-contain rounded-t-xl bg-blue-50"
                src={el.images[0]}
                alt={el.name + "-image"}
              />
            </div>
            <div className="h-[30%] ml-2 mt-1 flex flex-col">
              <span className="mt-3 font-semibold text-base md:text-[1.3rem]">
                {el.title.slice(0, 18)}
              </span>
              <div className="flex gap-3 items-center mt-0.5">
                <span className="font-semibold    py-0.5 rounded-md flex gap-1 items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {el.rating.toFixed(1)}
                  <span className="font-normal"> Ratings</span>
                </span>
              </div>
              <span className="bg-green-300 font-semibold  px-2 py-0.5 rounded-md w-[50%] md:w-20 mt-0.5">
                {Math.floor(el.discountPercentage)}% Off
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="h-100"></div> */}
    </div>
  );
};

export default BestDeals;
