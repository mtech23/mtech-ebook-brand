import React from 'react'
import UserLayout from '../../components/Layout/UserLayout'
import InnerHero from "../../components/InnerHero";
import Section2 from "../../components/Section2";
import CustomCategory from "../../components/CustomCategory";
import SecondCustomBanner from "../../components/SecondCustomBanner";
import FirstCustomBanner from "../../components/FirstCustomBanner";
import PublishBook from "../../components/PublishBook";
import Testimonial from "../../components/Testimonial";
import CustomPublication from "../../components/CustomPublication";
import Faq from "../../components/Faq";
import GetTouch from "../../components/GetTouch";

import {
    
    sec2img,
  } from "../../asserts/images";

const BookEditing = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="ghostWritingBg"
          title="Let Your Story Be Heard, Beautifully"
          subtitle=" Edited And Clear"
          para="Are you a passionate writer, pouring your heart and soul into making the perfect manuscript? At Random House Publishers, we understand the dedication it takes to bring your story to life. That's why we're proud to introduce our premier Book Editing Service, designed to raise your work to its highest potential."
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="Trust Random House   "
          subtitle=" Publishers To Polish"
          title2="Your Narrative"
          subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={sec2img}
        />

        <CustomCategory className="category_section2" />
        <FirstCustomBanner />
        <PublishBook />
        <Testimonial />
        <SecondCustomBanner />
        <CustomPublication />
        <Faq />
        <GetTouch />
        </UserLayout>
    </>
  )
}

export default BookEditing