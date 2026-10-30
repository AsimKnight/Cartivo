import { ShoppingCart } from "lucide-react";
import Navbar from "./COMPONENTS/Navbar";
import Home from "./PAGES/Home";
import { useState } from "react";
const App = function () {
  const [isManuOpen, setisManuOpen] = useState(false);

  return (
    <div className=" h-screen w-[99vw] bg-[#F8FAFC]">
      <Navbar isManuOpen={isManuOpen} setisManuOpen={setisManuOpen} />
      <Home />
    </div>
  );
};

export default App;
