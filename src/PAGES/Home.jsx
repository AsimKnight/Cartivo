import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [deals, setDeals] = useState([]);

  // const [products2, setProducts2] = useState([]);
  const categories = [
    {
      name: "Men",
      imageUrl:
        "https://thumbs.dreamstime.com/b/flat-lay-modern-men-s-clothing-brown-wooden-background-top-view-hipster-clothes-accessories-85602801.jpg",
    },
    {
      name: "Women",
      imageUrl:
        "https://cdn.prod.website-files.com/660ecf019c7e352fa2b17119/66bcf5ae59fad8f972cf5181_blogcover10items.webp",
    },
    {
      name: "Electronic",
      imageUrl:
        "https://themetagadget.com/wp-content/uploads/2026/10/Modern-Gadget-Shopping-Showcase-150kb.jpeg",
    },
    {
      name: "Jewellary",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3ZD-YyseCb7iM1mGYw3tMlBmm7nvjh5bdWkEo-o4UQ&s=10",
    },
  ];

  useEffect(function () {
    async function loadProduct() {
      //dummy json api
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      console.log("data is  : ", data);

      setProducts(data.products);
      const dealsArray = data.products.filter((el) => {
        console.log(el.discountPercentage);
        return el.discountPercentage >= 12;
      });
      setDeals(dealsArray);

      console.log("deals Array is ", dealsArray);
      console.log(deals);

      // function oldCode() {
      //   // const res2 = await fetch("https://fakestoreapi.com/products");
      //   // const data2 = await res2.json();
      //   // console.log(data2);
      //   // setProducts2(data2);
      //   // console.log(products2);
      // }
    }
    loadProduct();
  }, []);

  // return (
  //   <div className=" w-[99vw] bg-[#F8FAFC]">
  //     <div className="hero-secion">
  //       <img
  //         className=" hidden md:block lg:block xl:block w-[95%] h-155 mx-auto  mt-20 mb-5"
  //         src="https://rukminim2.flixcart.com/fk-p-flap/3200/1560/image/2c833d8a2c5d2ff8.png?q=60"
  //         alt="hero-section-img"
  //       />
  //       <img
  //         className=" block w-[96%] mx-auto object-cover md:hidden lg:hidden xl:hidden"
  //         src="https://m.media-amazon.com/images/I/71oSj4j0cWL._AC_AIweblab1431263,T1_FMavif_SF1282.5,2052_QL54_.jpg?aicid=homepage-single-creative-card"
  //         alt="hero-section-img"
  //       />
  //     </div>
  //     <div className="products1  w-[95%] mx-auto mt-5 ">

  //       {/* {https://thumbs.dreamstime.com/b/flat-lay-modern-men-s-clothing-brown-wooden-background-top-view-hipster-clothes-accessories-85602801.jpg} */}
  //       {/* {https://cdn.prod.website-files.com/660ecf019c7e352fa2b17119/66bcf5ae59fad8f972cf5181_blogcover10items.webp} */}
  //       {/* {https://themetagadget.com/wp-content/uploads/2026/10/Modern-Gadget-Shopping-Showcase-150kb.jpeg} */}
  //       {/* {https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3ZD-YyseCb7iM1mGYw3tMlBmm7nvjh5bdWkEo-o4UQ&s=10} */}
  //       <h1 className="font-bold text-[clamp(1.25rem,4vw,3rem)] md:mb-5">
  //         The Best Products for You
  //       </h1>
  //       <div className="flex flex-wrap justify-around gap-3">
  //         {products.map((el) => (
  //           <div className=" w-[48%] bg-mauve-100 md:w-[32%] xl:w-[24%] ">
  //             <div className="h-50">
  //               <img
  //                 className="object-contain h-full mx-auto "
  //                 src={el.image}
  //                 alt={el.title}
  //               />
  //             </div>
  //             <div className=" px-2 py-3  ">
  //               <h2 className="font-bold  leading-5  scroll-auto line-clamp-2 md:leading-6 lg:leading-7 xl:leading-7 text-[clamp(1rem,2vw,1.3rem)]">
  //                 {/* {el.title.length > 40
  //                   ? el.title.slice(0, 40) + "..."
  //                   : el.title} */}
  //                 {el.title}
  //               </h2>
  //               <div className="md:flex lg:flex xl:flex gap-4 md:mt-2">
  //                 <div className="flex gap-2 text-sm py-1 ">
  //                   <span className="flex items-center gap-1 ">
  //                     <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
  //                     {el.rating.rate}
  //                   </span>
  //                   <span className="text-sm ">({el.rating.count})</span>
  //                 </div>
  //                 <span className="text-sm py-1 bg-blue-200 px-2 rounded-md ">
  //                   {el.category}
  //                 </span>
  //               </div>
  //               <div className=" mt-3 font-bold">
  //                 <span className="">₹</span>
  //                 {Math.ceil(el.price * 95).toLocaleString("en-US")}
  //               </div>
  //               <div className="flex  flex-col gap-2 md:flex-row">
  //                 <button className="w-[99%] mx-auto font-bold bg-amber-300 rounded-md py-2 md:w-[48%]">
  //                   Add to Cart
  //                 </button>
  //                 <button className="w-[99%] mx-auto font-bold bg-black text-white rounded-md py-2 md:w-[48%]">
  //                   Buy Now
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="w-[99%] mx-auto h-999">
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
      <div className="my-5  px-2 py-2">
        <h2 className="mb-3 font-semibold  text-[clamp(1.25rem,1.7vw,3rem)] px-2">
          Todays Best Deals
        </h2>
        <div className="  overflow-x-auto overflow-y-hidden w-full flex md:flex-wrap gap-3">
          {deals?.map((el) => (
            <div className="shrink-0 w-[45%] h-70  bg-mauve-50 rounded-xl md:w-[32%] lg:w-[24%] lg:hover:scale-102 lg:transition-all">
              <div className=" w-full h-[55%] ">
                <img
                  className="w-full h-full object-cover rounded-t-xl bg-blue-50"
                  src={el.images[0]}
                  alt={el.name + "-image"}
                />
              </div>
              <div className="h-[30%] ml-2 mt-1 flex flex-col">
                <span className="mt-3 font-semibold text-[clamp(1rem,2vw,3rem)]">
                  {el.title}
                </span>
                <div className="flex gap-2 items-center">
                  <span className="text-green-600 font-semibold bg-white px-1 py0.5 rounded-md border border-black">
                    {Math.floor(el.discountPercentage)}% Off
                  </span>
                  <span className="font-semibold bg-amber-300 px-2 py-0.5 rounded-md">
                    {el.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="h-100"></div> */}
      </div>
    </div>
  );
};

export default Home;
