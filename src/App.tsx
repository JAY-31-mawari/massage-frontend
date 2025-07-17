import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './appRoutes';
import ScrollToTop from './components/scroll-to-top';


function App() {
  return (
    <>
      <AppRoutes />
      <ScrollToTop/>
    </>
  );
}

export default App;
