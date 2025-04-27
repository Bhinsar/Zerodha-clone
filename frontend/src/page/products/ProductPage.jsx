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
    {
      image: "/assets/coin.png",
      title: "Coin",
      content:
        "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
      tryDemo: "/home",
      learnMore: "/home",
      playStore: "/home",
      appleStore: "/home",
    },
    {
      image: "/assets/varsity-products.png",
      title: "Coin",
      content:
        "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
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
      <LeftImage {...LeftImageContent[1]} />
      <RightImage />
      <LeftImage {...LeftImageContent[2]} />
      <Universe />
    </>
  );
}
