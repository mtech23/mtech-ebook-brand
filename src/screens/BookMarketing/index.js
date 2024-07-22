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

const BookMarketing = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="ghostWritingBg"
          title="Reach Readers Everywhere Our Book Marketing Service"
          subtitle=" Makes It Happen!"
          para="Our Book Marketing service is designed to catapult your literary masterpiece into the spotlight it deserves. With a personalized approach to each author and their work, we employ strategic marketing tactics that resonate with readers across various platforms. From engaging social media campaigns to targeted email newsletters and innovative promotional events, we ensure your book "
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="From Page To Stage Random   "
          subtitle=" House Publishers"
          title2="Turns Authors Into Stars"
          // subtitle1="How we work?"
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

export default BookMarketing