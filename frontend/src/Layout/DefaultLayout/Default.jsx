import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <main className="px-4 sm:px-8 md:px-10 lg:px-52 py-6">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
