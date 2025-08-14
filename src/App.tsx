import React from "react";
// import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from "./appRoutes";
import ScrollToTop from "./components/scroll-to-top";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;
