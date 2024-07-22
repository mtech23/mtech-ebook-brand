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

const FaithWriter = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="ghostWritingBg"
          title="Writing The Next Chapter Of Faith Your"
          subtitle=" Religious "
          title2="Book Starts Here"
          para="Whether you're a seasoned theologian, a spiritual leader, or someone with a deep personal journey, we are dedicated to helping you create a convincing story that resonates deeply with readers. At Random House Publishers, we bring decades of publishing excellence to guide your manuscript from inception to publication, ensuring your voice and message shine through. "
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="Trust Our "
          subtitle="  Ghostwriters"
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

export default FaithWriter