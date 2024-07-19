import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../screens/Home';
import GhostWriter from "../screens/GhostWriter";

const Router = () => {
  return (
    <BrowserRouter basename="ebookBrand">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ghost-writer" element={<GhostWriter/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
