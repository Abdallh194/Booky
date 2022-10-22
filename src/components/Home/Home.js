import React from "react";
import About from "../About/About";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Featured />
      <About />
      <Footer />
    </>
  );
}

export default Home;
