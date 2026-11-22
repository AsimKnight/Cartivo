import React from "react";

const HeroImage = () => {
  return (
    <div className="hero-secion mt-20">
      <div className="hidden md:block rounded-2xl w-[98%]  mx-auto">
        <img
          className="rounded-2xl w-full "
          src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/2c833d8a2c5d2ff8.png?q=60"
          alt=""
        />
      </div>
      <img
        className="rounded-xl block w-[96%] mx-auto object-cover md:hidden lg:hidden xl:hidden"
        src="https://m.media-amazon.com/images/I/71oSj4j0cWL._AC_AIweblab1431263,T1_FMavif_SF1282.5,2052_QL54_.jpg?aicid=homepage-single-creative-card"
        alt="hero-section-img"
      />
    </div>
  );
};

export default HeroImage;
