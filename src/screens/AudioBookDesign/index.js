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

import { audioImg2 } from "../../asserts/images";

const AudioBookDesign = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="audioBookDesignBg"
          title="Listen To Your Favorite Reads"
          subtitle=" Anywhere, Anytime!"
          para="Welcome to a world where stories come alive through the magic of audio! At Random House Publishers, we understand the joy of getting lost in a charming story. That's why we've brought your favorite reads to life in a whole new way – through our extensive collection of audiobooks. With Random House Publishers' Audio Books, you can dive into the enchanting realms of your most"
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Experience The Magic Of Literature In "
          subtitle=" Surround Sound"
          // title2="For Your Voice!"
          subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={audioImg2}
          imgClass="audioImg2"
          actions={true}
          btn1="Let’s Get Start"
          btn2="Call Us Now"
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

export default AudioBookDesign;
