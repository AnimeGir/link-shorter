import React from "react";

import { TopSlideA } from "../components/OtherComponents/TopSlideA/TopSlideA";
import { MineSlideA } from "../components/OtherComponents/MineSlideA/MineSlideA";
import { Footer } from "../components/Footer/Footer";
import { ProductionFooter } from "../components/ProductionFooter/ProductionFooter";

export const AboutPage = () => {
  return (
    <>
      <TopSlideA />
      <MineSlideA />
      <Footer />
      <ProductionFooter />
    </>
  );
};
