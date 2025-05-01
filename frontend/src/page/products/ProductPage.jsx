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

  const RightImageContent = [
    {
      image: "/assets/console.png",
      title: "Console",
      content:
        "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
      viewTitle: "Learn more ",
      viewLink: "/home",
    },
    {
      image: "/assets/landing.svg",
      title: "Kite Connect API",
      content:
        "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
      viewTitle: "Kite Connect",
      viewLink: "/home",
    },
  ];

  return (
    <>
      <Hero />
      <LeftImage {...LeftImageContent[0]} />
      <RightImage {...RightImageContent[0]} />
      <LeftImage {...LeftImageContent[1]} />
      <RightImage {...RightImageContent[1]} />
      <LeftImage {...LeftImageContent[2]} />
      <Universe />
    </>
  );
}
