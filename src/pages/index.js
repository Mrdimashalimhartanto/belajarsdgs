import React from "react";
import Header from "./component/Header";
import Feature from "./component/feature";
import Content from "./component/content";
import ContentSDGS from "./component/contentsdgs";
import EkosistemDarat from "./component/materi1";
import EkosistemDarat2 from "./component/materi2";
import Footer from "./component/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Feature />
      <Content />
      <ContentSDGS />
      <EkosistemDarat />
      <EkosistemDarat2 />
      <Footer />
    </div>
  );
}

export default Home;
