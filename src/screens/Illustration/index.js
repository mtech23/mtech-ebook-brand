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
    
    illustrationImg2,
  } from "../../asserts/images";

const Illustration = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="illustrationBg"
          title="Let Your Story Shine With Our Custom"
          subtitle=" Illustrations"
          para="Random House Publishers's Book Illustration Service delivers captivating visual narratives that breathe life into every story. With a meticulous blend of creativity and craftsmanship, our team of seasoned illustrators transforms words into vibrant imagery, seamlessly complementing the essence of each manuscript. Whether it's intricate line drawings, vibrant digital illustrations, or evocative cover  "
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="Authors, Meet Your Visual  "
          subtitle=" Storytellers"
          // title2="For Your Voice!"
          subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={illustrationImg2}
          imgClass="illustrationImg2"
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

export default Illustration