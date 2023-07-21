import React, { useEffect } from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import ShopCategory from "./Shopcategory/Shopcategory";
import Stat from "./Stat/Stat";

const Home = () => {
  useEffect(() => {
    document.title = "Toy Cars Store";
  }, []);

  return (
    <div>
      <Banner></Banner>
      <About></About>
      <h4 className="text-2xl md:text-4xl text-center font-semibold mt-24 font-serif text-cyan-500">
        Spring into fun with toy cars
      </h4>
      <hr />
      <Gallery></Gallery>
      <ShopCategory></ShopCategory>
      <h4 className="text-2xl md:text-4xl text-center font-semibold mt-24 font-serif text-cyan-500">
        Store Statistics
      </h4>
      <hr />
      <Stat></Stat>
    </div>
  );
};

export default Home;
