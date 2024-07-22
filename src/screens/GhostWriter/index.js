import React from "react";
import UserLayout from "../../components/Layout/UserLayout";
import {
  boxBelowImg,
  brilliantBookImg,
  chatIcon,
  heroImgLeft,
  heroImgRight,
  leatherImg,
  polygon01,
  redCirclewithSemi,
  redSemibehindBook,
  semi01,
  semi02,
  semi03,
  siteScrollImg,
  sec2img
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
        {/* <InnerHero /> */}
        {/* <section className="hero_section">
          <div className="container-fluid position-relative">
            <div className="hero_response_first_img">
              <img src={heroImgLeft} alt="first"></img>
            </div>

            <div className="hero_response_second_img">
              <img src={heroImgRight} alt="first"></img>
            </div>

            <div className="row justify-content-between">
              <div className="col-lg-3 col-sm-0">
                <div
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <img
                    draggable={false}
                    src={heroImgLeft}
                    className="img-fluid making_none"
                    alt=""
                  ></img>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 col-8 mx-auto align-self-center">
                <div
                  className="hero_centered_main"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <div className="hero_centered_content">
                    <div className="content_with_border">
                      <h2 className="brand_name_title">
                        Welcome To Brand Name
                      </h2>

                      <h2 className="ebook_publisher_title">
                        We Are the Ebook Publishers You Wish For
                      </h2>

                      <p className="avail_discount_text">
                        Avail a discount on all our services.
                      </p>
                    </div>

                    <div className="featherImg">
                      <img
                        src={leatherImg}
                        className="img-fluid"
                        alt="leather"
                      ></img>
                    </div>
                  </div>
                  <div className="hero_btns">
                    <button className="btn_with_icon btn-red">
 
                      <span className="btn_with_icon_text">Get a Quote</span>
                    </button>
                    <button className="btn_with_icon">
                      <img
                        src={chatIcon}
                        className="btn_with_icon_img"
                        alt=""
                      />
                      <span className="btn_with_icon_text">Chat With us</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-0">
                <div
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <img
                    draggable={false}
                    src={heroImgRight}
                    className="img-fluid making_none"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <Section2 title="Trust Our " subtitle="  Ghostwriters" title2="For Your Voice!" subtitle1="How we work?"
          subtitle2="    Tailored Collaborations?"
          subtitle3="  Expert Guidance" 
          image={sec2img}
          />

          <CustomCategory className="category_section2"/>
          <FirstCustomBanner/>
          <PublishBook/>
          <Testimonial/>
          <SecondCustomBanner/>
          <CustomPublication/>
          <Faq/>
<GetTouch/>
      </UserLayout>
    </>
  );
};

export default GhostWriter;
