import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
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

import { sec2img } from "../../asserts/images";

const CoverDesign = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="ghostWritingBg"
          title="Make Your Book Stand Out On "
          subtitle=" Every Shelf"
          para="At Random House Publishers, we understand that a book's cover is more than just a protective layer; it's a powerful tool to capture attention and communicate your story at a glance. Our book cover design service is dedicated to ensuring your book not only stands out on every shelf but also resonates deeply with your target audience."
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
  );
};

export default CoverDesign;
