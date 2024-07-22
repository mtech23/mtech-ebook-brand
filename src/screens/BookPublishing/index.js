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

const BookPublishing = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="ghostWritingBg"
          title="Where Every Voice Finds Its Place In"
          subtitle=" Print"
          para="At Random House Publishers, we believe in the transformative power of words. Our legacy is built on a commitment to nurturing creativity, fostering diversity, and amplifying voices from every corner of the globe. With a rich history spanning decades, we've been at the forefront of the literary world, shaping the landscape of storytelling one book at a time."
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="Trust Our "
          subtitle=" Ghostwriters"
          title2="For Your Voice!"
          subtitle1="How we work?"
          subtitle2="    Tailored Collaborations?"
          subtitle3="  Expert Guidance"
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

export default BookPublishing