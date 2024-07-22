import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../screens/Home';
import GhostWriter from "../screens/GhostWriter";
import FaithWriter from "../screens/FaithWiter";
import BookEditing from "../screens/BookEditing";
import BookPublishing from "../screens/BookPublishing";
import BookMarketing from "../screens/BookMarketing";
import CoverDesign from "../screens/CoverDesign";
import AudioBookDesign from "../screens/AudioBookDesign";
import BookTrailer from "../screens/BookTrailer";
import Illustration from "../screens/Illustration";
import ChildrenIllustration from "../screens/ChildrenIllustration";
import ChildrenBookPrinting from "../screens/ChildrenBookPrinting";
import WebsiteAuthor from "../screens/WebsiteAuthor";
import CommicIllustration from "../screens/CommicIllustration";

const Router = () => {
  return (
    <BrowserRouter basename="ebookBrand">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ghost-writer" element={<GhostWriter/>} />
        <Route path="/faith-writer" element={<FaithWriter/>} />
        <Route path="/book-editing" element={<BookEditing/>} />
        <Route path="/book-publishing" element={<BookPublishing/>} />
        <Route path="/book-marketing" element={<BookMarketing/>} />
        <Route path="/cover-design" element={<CoverDesign/>} />
        <Route path="/audio-book-design" element={<AudioBookDesign/>} />
        <Route path="/book-trailer" element={<BookTrailer/>} />
        <Route path="/illustration" element={<Illustration/>} />
        <Route path="/children-illustration" element={<ChildrenIllustration/>} />
        <Route path="/children-book-printing" element={<ChildrenBookPrinting/>} />
        <Route path="/website-author" element={<WebsiteAuthor/>} />
        <Route path="/commic-illustration" element={<CommicIllustration/>} />
      </Routes>
 
       
    </BrowserRouter>
  );
};

export default Router;
