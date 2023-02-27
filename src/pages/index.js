import React from "react";
import Header from "./component/Header";
import Feature from "./component/feature";
import Content from "./component/content";
import ContentSDGS from "./component/contentsdgs";
import Footer from "./component/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Feature />
      <Content />
      <ContentSDGS />
      <Footer />
    </div>
  );
}

export default Home;
