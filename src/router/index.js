import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../screens/Home';
import GhostWriter from "../screens/GhostWriter";
import EveryShelf from "../screens/EveryShelf";

 
const Router = () => {
  return (
    <BrowserRouter basename="ebookBrand">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ghost-writer" element={<GhostWriter/>} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/every-shelf" element={<EveryShelf/>} />
      </Routes>
       
    </BrowserRouter>
  );
};

export default Router;
