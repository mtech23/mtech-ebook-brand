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

const WebsiteAuthor = () => {
  return (
    <>
        <UserLayout>

        <InnerHero
          innerheroclass="ghostWritingBg"
          title="Color Your Book With"
          subtitle=" Attractive Characters!"
          para="We believe that every children's book deserves to come alive with vibrant characters that leap off the page and into the hearts of young readers. That's why we're proud to offer our excellent children's book illustration service, where imagination knows no bounds and creativity flourishes."
        />

        <Section2
        innerSec2Class="innerbrilliant_mind_section"
          title="Bringing Books To Brilliant "
          subtitle=" Life Through"
          title2=" Art "
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

export default WebsiteAuthor