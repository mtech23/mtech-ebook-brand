import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
import {
  sec2img,
} from "../../asserts/images";
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

const GhostWriter = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="ghostWritingBg"
          title="Behind Every Great Story, There's A"
          subtitle=" Ghostwriter!"
          para="We understand that every story deserves to be told, but not every author has the time, expertise, or inclination to write it themselves. That's where our Ghostwriting Services come in. We pride ourselves on being the invisible hand behind many captivating narratives, helping individuals, businesses, and celebrities share their stories with the world."
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
          imgClass="ghost-img2"
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

export default GhostWriter;
