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

import { childrenBookPrintingImg2 } from "../../asserts/images";

const ChildrenBookPrinting = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="childrenBookPrintingBg"
          title="Printing Pages Filled With Magic, "
          subtitle=" Just For Kids"
          para="Random House Publishers's Book Illustration Service delivers captivating visual narratives that breathe life into every story. With a meticulous blend of creativity and craftsmanship, our team of seasoned illustrators transforms words into vibrant imagery, seamlessly complementing the essence of each manuscript. Whether it's intricate line drawings, vibrant digital illustrations, or evocative cover  "
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Every Page A Journey, Every Book "
          subtitle=" An Adventure"
          title2="For Children"
          subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={childrenBookPrintingImg2}
          imgClass="childrenBookPrintingImg2"
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

export default ChildrenBookPrinting;
