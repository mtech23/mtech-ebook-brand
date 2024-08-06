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

import { bookTrailerImg2, bookTrailerVideo2 } from "../../asserts/images";

const BookTrailer = () => {
  return (
    <>
      <UserLayout>
        <InnerHero
          innerheroclass="bookTrailerBg"
          title="Experience The Essence Of Your Book In A "
          subtitle=" Cinematic Journey"
          para="Experience the essence of your favorite book in a fascinating cinematic journey with our Book Trailer service. Transporting you into the heart of the story, this dynamic trailer explains like a mini-movie, teasing the plot, introducing vibrant characters, and immersing you in the rich tapestry of the story's world. Through expertly made visuals and emotive musiC."
        />

        <Section2
          innerSec2Class="innerbrilliant_mind_section"
          title="Creating Hype For Your Book With An Excellent  "
          subtitle=" Video Trailer"
          // title2="For Your Voice!"
          subtitle1="How we work?"
          // subtitle2="    Tailored Collaborations?"
          // subtitle3="  Expert Guidance"
          image={bookTrailerImg2}
          imgClass="bookTrailerImg2"
          // video={bookTrailerVideo2}
          // videoClass="tabletVideo"
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

export default BookTrailer;
