import React from "react";

import { TopSlideSupport } from "../components/SupportPage/TopSlideSupport/TopSlideSupport";
import { MineSlideSupport } from "../components/SupportPage/MineSlideSupport/MineSlideSupport";
import { Footer } from "../components/Footer/Footer";
import { ProductionFooter } from "../components/ProductionFooter/ProductionFooter";

export const SupportPage = () => {
  return (
    <>
      <TopSlideSupport />
      <MineSlideSupport />
      <Footer />
      <ProductionFooter />
    </>
  );
};
