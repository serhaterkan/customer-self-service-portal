import Footer from "./default/Footer";
import Header from "./default/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => (
  <>
    <Header />
    <main>
      <section>
        <div className="container">
          <Outlet />
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default DefaultLayout;
