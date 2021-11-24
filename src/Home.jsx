import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGpt3,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

const Home = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="gradient__bg">
          <Header />
        </div>
        <Brand />
        <WhatGpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
      </div>
    </>
  );
};

export default Home;
