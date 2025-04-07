import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

export default function ProductPage() {
  const LeftImageContent = [
    {
      image: "/assets/kite.png",
      title: "Kite",
      content:
        "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
      tryDemo: "/home",
      learnMore: "/home",
      playStore: "/home",
      appleStore: "/home",
    },
  ];
  return (
    <>
      <Hero />
      <LeftImage {...LeftImageContent[0]} />
      <RightImage />
      <Universe />
    </>
  );
}
