import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import {
  heroImgLeft,
  heroImgRight,
  phoneImg,
  questionImg,
  leatherImg,
  brilliantBookImg,
  boxBelowImg,
  polygon01,
  semi01,
  semi02,
  semi03,
  redCirclewithSemi,
  redSemibehindBook,
  siteScrollImg,
  helpingIcon01,
  helpingIcon02,
  helpingIcon03,
  helpingIcon04,
  helpingIcon05,
  Imgundercircle,
  bannerImg01,
  ImgUnderArc,
  A4book,
  categoryIcon01,
  categoryIcon02,
  categoryIcon03,
  categoryIcon04,
  categoryIcon05,
  categorybk,
  processImg01,
  processImg02,
  processImg03,
  processImg04,
  secondBannerImg01,
  getTouchBook,
  processFeather,
  helpingBook,
  banner2imgRight,
  publishBookImg,
  publishBookBgPattern,
  testimonialGroupImg,
  testimonialQuote,
  ratingStars,
  publicationBook1,
  publicationBook2,
  instagramIcon,
  facebookIcon,
  youtubeIcon,
  twitterIcon,
  dmcaImg,
  paymentImg,
  footerBrandImgs,
  polygon03,
  chatIcon,
} from "../../asserts/images";
import "./style.css";

import FirstCustomBanner from "../../components/FirstCustomBanner";
import SecondCustomBanner from "../../components/SecondCustomBanner";
import Testimonial from "../../components/Testimonial";
import CustomPublication from "../../components/CustomPublication";
import Faq from "../../components/Faq";
import GetTouch from "../../components/GetTouch";
import CustomCategory from "../../components/CustomCategory";
import UserLayout from "../../components/Layout/UserLayout";
import PublishBook from "../../components/PublishBook";
import Partners from "../../components/Partners";

const Home = () => {
  
  return (
    <>
      <UserLayout>
        <section className="hero_section">
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
                      {/* <img src={chatIcon} className="btn_with_icon_img" alt="" /> */}
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
        </section>

        <section class="brilliant_mind_section">
          <div className="polygonImg01">
            <img draggable={false} src={polygon01} alt="polygon"></img>
          </div>

          <div className="polygonImg02">
            <img draggable={false} src={polygon01} alt="polygon"></img>
          </div>

          <div className="container">
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <div class="sec_title">
                  <h2
                    className=""
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    BRILLIANT<span class="color-red"> MINDS PUBLISH </span> HERE
                  </h2>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>

                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem.
                  </p>

                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem.
                  </p>

                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                  <button
                    type="submit"
                    class="brand_btn"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    Read More
                  </button>
                </div>
              </div>

              <div class="col-sm-12 col-lg-6">
                <div className="book_main_box">
                  <div className="book_semicircle_box">
                    <div className="first_semi">
                      <img draggable={false} src={semi01} alt="semi"></img>
                    </div>

                    <div className="second_semi">
                      <img draggable={false} src={semi02} alt="semi"></img>
                    </div>

                    <div className="third_semi">
                      <img draggable={false} src={semi03} alt="semi"></img>
                    </div>

                    <div className="circle_with_semi">
                      <img
                        draggable={false}
                        src={redCirclewithSemi}
                        alt="semi"
                      ></img>
                    </div>

                    <div className="circle_with_semi2">
                      <img
                        draggable={false}
                        src={redCirclewithSemi}
                        alt="semi"
                      ></img>
                    </div>
                  </div>

                  <div
                    class="text-center book_img position-relative"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    <img
                      src={brilliantBookImg}
                      className="img-fluid"
                      alt=""
                    ></img>

                    <div className="redCircleBehindBook">
                      <img
                        draggable={false}
                        src={redSemibehindBook}
                        alt="red"
                      ></img>
                    </div>
                  </div>

                  <div>
                    <img
                      draggable={false}
                      src={boxBelowImg}
                      class="img-fluid"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Partners />
        </section>

        <section className="helping_things_section">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-12 col-lg-6">
                <div className="helping_left_part">
                  <div id="parent-circle">
                    <div className="duolingo_Under_img">
                      <img
                        draggable={false}
                        src={Imgundercircle}
                        alt="thtye"
                      ></img>
                    </div>

                    <div class="circle blue making_it_none">
                      <img
                        src={helpingIcon01}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Book Publishing</h6>
                    </div>
                    <div class="circle pink making_it_none">
                      <img
                        src={helpingIcon02}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Ghost Writing</h6>
                    </div>
                    <div class="circle lime making_it_none">
                      <img
                        src={helpingIcon03}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Book Editing</h6>
                    </div>
                    <div class="circle orange making_it_none">
                      <img
                        src={helpingIcon04}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Ebook Writing</h6>
                    </div>
                    <div class="circle teal making_it_none">
                      <img
                        src={helpingIcon05}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                      <h6 className="duolingo_tab_title">Lorem Ipsum</h6>
                    </div>
                  </div>
                </div>

                <div className="main_duolingo_tab_below">
                  <div className="single_duolingo_tab_below">
                    <div className="duolingo_tab_img_below">
                      <img
                        src={helpingIcon01}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                    </div>
                    <div className="">
                      <h6 className="duolingo_tab_title_below m-0">
                        Book Publishing
                      </h6>
                    </div>
                  </div>

                  <div className="single_duolingo_tab_below">
                    <div className="duolingo_tab_img_below">
                      <img
                        src={helpingIcon02}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                    </div>
                    <div className="">
                      <h6 className="duolingo_tab_title_below m-0">
                        Ghost Writing
                      </h6>
                    </div>
                  </div>

                  <div className="single_duolingo_tab_below">
                    <div className="duolingo_tab_img_below">
                      <img
                        src={helpingIcon03}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                    </div>
                    <div className="">
                      <h6 className="duolingo_tab_title_below m-0">
                        Book Editing
                      </h6>
                    </div>
                  </div>

                  <div className="single_duolingo_tab_below">
                    <div className="duolingo_tab_img_below">
                      <img
                        src={helpingIcon04}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                    </div>
                    <div className="">
                      <h6 className="duolingo_tab_title_below m-0">
                        Ebook Writing
                      </h6>
                    </div>
                  </div>

                  <div className="single_duolingo_tab_below">
                    <div className="duolingo_tab_img_below">
                      <img
                        src={helpingIcon05}
                        alt="helpingIcon"
                        className="duolingo_tab_img"
                      ></img>
                    </div>
                    <div className="">
                      <h6 className="duolingo_tab_title_below m-0">
                        Lorem Ipsum
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-10 col-lg-6 mx-auto">
                <div className="main_helping_content">
                  <div className="sec_title">
                    <h2
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="1000"
                    >
                      Things We Can <br />
                      <span class="color-red"> Help </span>You With
                    </h2>
                    <div className="helping_tab">
                      <div
                        className="helping_tab_img"
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="2000"
                      >
                        <img draggable={false} src={helpingBook} alt="Book" />
                      </div>
                      <h3
                        data-aos="fade-up"
                        data-aos-offset="0"
                        data-aos-duration="3000"
                      >
                        Book Editing
                      </h3>
                    </div>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                      className="helping_tab_para"
                    >
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem.
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                      className="helping_tab_para"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,
                    </p>
                    <button
                      type="submit"
                      class="brand_btn"
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="3000"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FirstCustomBanner />

        {/* <section className="first_banner_section">
<div className="container">
  <div className="row align-items-end">
    <div className="col-sm-12 col-lg-7">
      <div className="first_banner_left_part">
        <div className="sec_title">
          <h2 data-aos="fade-right"
        data-aos-offset="0"
        data-aos-duration="1000">Lorem Ipsum Is A dummy Text</h2>
          <p data-aos="fade-right"
        data-aos-offset="0"
        data-aos-duration="2000">
            when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem.
          </p>
          <button type="submit" class="brand_btn" data-aos="fade-right"
        data-aos-offset="0"
        data-aos-duration="3000">
            Get Started
          </button>
        </div>
      </div>
    </div>

    <div className="col-sm-8 col-lg-5 mx-auto">
      <div className="first_banner_right_part">
        <div data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="3000">
          <img
            src={bannerImg01}
            className="img-fluid"
            alt="bnner"
          ></img>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */}

        <CustomCategory />

        {/* <section className="category_section">
<div className="category_polygonImg01">
  <img draggable={false} src={polygon01} alt="polygon"></img>
</div>
<div className="category_bk">
  <img draggable={false} src={categorybk} alt="bk"></img>
</div>

<div className="container">
  <div className="row">
    <div className="col-md-12">
      <div class="sec_title" bis_skin_checked="1">
        <h2 data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1000">
          <span class="color-red">Categories</span> We Cater for
          <span class="color-red">Authors</span>
        </h2>
      </div>
    </div>

    <div className="col-sm-12 col-lg-7 ml-auto">
      <div className="category_circle">
        <div className="arc">
          <div className="first_category">
            <div className="first_category_detail">
              <span className="category_details"></span>
              <span className="category_detail_icon">
                <img
                  draggable={false}
                  src={categoryIcon01}
                  alt="cate"
                ></img>
              </span>
              <span className="category_detail_desc">
                <h6 class="category_detail_title m-0">Fiction</h6>
                <p className="category_detail_para m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </span>
            </div>
          </div>

          <div className="second_category">
            <div className="first_category_detail">
              <span className="category_details"></span>
              <span className="category_detail_icon">
                <img
                  draggable={false}
                  src={categoryIcon02}
                  alt="cate"
                ></img>
              </span>
              <span className="category_detail_desc">
                <h6 class="category_detail_title m-0">Children</h6>
                <p className="category_detail_para m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </span>
            </div>
          </div>

          <div className="third_category">
            <div className="first_category_detail">
              <span className="category_details"></span>
              <span className="category_detail_icon">
                <img
                  draggable={false}
                  src={categoryIcon03}
                  alt="cate"
                ></img>
              </span>
              <span className="category_detail_desc">
                <h6 class="category_detail_title m-0">Comic</h6>
                <p className="category_detail_para m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </span>
            </div>
          </div>

          <div className="forth_category">
            <div className="first_category_detail">
              <span className="category_details"></span>
              <span className="category_detail_icon">
                <img
                  draggable={false}
                  src={categoryIcon04}
                  alt="cate"
                ></img>
              </span>
              <span className="category_detail_desc">
                <h6 class="category_detail_title m-0">Action</h6>
                <p className="category_detail_para m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </span>
            </div>
          </div>

          <div className="fifth_category">
            <div className="first_category_detail">
              <span className="category_details"></span>
              <span className="category_detail_icon">
                <img
                  draggable={false}
                  src={categoryIcon05}
                  alt="cate"
                ></img>
              </span>
              <span className="category_detail_desc">
                <h6 class="category_detail_title m-0">Romance</h6>
                <p className="category_detail_para m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </span>
            </div>
          </div>

          <div className="imgUnderArc">
            <img
              draggable={false}
              src={ImgUnderArc}
              alt="underArc"
            ></img>
            <img
              draggable={false}
              src={A4book}
              alt="a4"
              className="A4book"
            ></img>
          </div>
        </div>
      </div>

      <div className="details_after_category">
          <div className="first_category_detail_below">
              <span className="category_detail_icon">
                <img
                  draggable={false}
                  src={categoryIcon01}
                  alt="cate"
                ></img>
              </span>
              <span className="category_detail_desc_below">
                <h6 class="category_detail_title m-0">Fiction</h6>
                <p className="category_detail_para m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </span>
            </div>


            <div className="first_category_detail_below">
              <span className="category_detail_icon">
                <img
                  draggable={false}
                  src={categoryIcon02}
                  alt="cate"
                ></img>
              </span>
              <span className="category_detail_desc_below">
                <h6 class="category_detail_title m-0">Children</h6>
                <p className="category_detail_para m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </span>
            </div>

            <div className="first_category_detail_below">
              <span className="category_detail_icon">
                <img
                  draggable={false}
                  src={categoryIcon03}
                  alt="cate"
                ></img>
              </span>
              <span className="category_detail_desc_below">
                <h6 class="category_detail_title m-0">Comic</h6>
                <p className="category_detail_para m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </span>
            </div>

            <div className="first_category_detail_below">
              <span className="category_detail_icon">
                <img
                  draggable={false}
                  src={categoryIcon04}
                  alt="cate"
                ></img>
              </span>
              <span className="category_detail_desc_below">
                <h6 class="category_detail_title m-0">Action</h6>
                <p className="category_detail_para m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </span>
            </div>

            <div className="first_category_detail_below">
              <span className="category_detail_icon">
                <img
                  draggable={false}
                  src={categoryIcon05}
                  alt="cate"
                ></img>
              </span>
              <span className="category_detail_desc_below">
                <h6 class="category_detail_title m-0">Romance</h6>
                <p className="category_detail_para m-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </span>
            </div>


      </div>
    </div>
  </div>
</div>
</section> */}

        <section class="process_sec">
          <img
            draggable={false}
            src={processFeather}
            className="process_feather"
            alt="feather"
          />

          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="sec_title">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    The Process For <br />
                    <span class="color-red">Ebooks</span> We
                    <span class="color-red"> Follow</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="row process_rows">
              <div class="col-sm-10 col-lg-5 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 1</h4>
                  <h3 class="process_content_title">Crafting the Details</h3>
                  <p>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem.
                  </p>
                </div>
              </div>
              <div class="col-sm-6 col-lg-4 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg01}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-sm-6 col-lg-3 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>01</h1>
                </div>
              </div>
            </div>
            <div class="row process_rows">
              <div class="col-sm-10 col-lg-5 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 2</h4>
                  <h3 class="process_content_title">
                    Publishing Your Masterpiece
                  </h3>
                  <p>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg02}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>02</h1>
                </div>
              </div>
            </div>
            <div class="row process_rows">
              <div class="col-lg-5 col-sm-10 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 3</h4>
                  <h3 class="process_content_title">Reaching Your Readers</h3>
                  <p>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg03}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>03</h1>
                </div>
              </div>
            </div>

            <div class="row process_rows">
              <div class="col-lg-5 col-sm-10 mx-auto">
                <div
                  class="process_content"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <h4 class="process_step">Step 4</h4>
                  <h3 class="process_content_title">
                    Designing a Beautiful Book
                  </h3>
                  <p>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem.
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mx-auto">
                <div
                  class="process_img"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="2000"
                >
                  <img
                    draggable={false}
                    src={processImg04}
                    class="img-fluid"
                    alt="Crafting the Details"
                  />
                </div>
              </div>
              <div class="col-lg-3 col-sm-6 mx-auto">
                <div
                  class="process_counter"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="3000"
                >
                  <h1>04</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SecondCustomBanner />

        {/* <section className="second_banner_section">
<div className="banner_left_img">
  <img draggable={false} src={secondBannerImg01} alt="" />
</div>
<div className="container">
  <div className="row align-items-end">
    <div className="col-md-12">
      <div className="sec_title">
        <h2 data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1000">Lorem Ipsum Is A dummy Text</h2>
        <p data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="2000">
          when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the
          1960s with the release of Letraset sheets containing Lorem.
        </p>
        <button type="button" className="brand_btn" data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="3000">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>
<div className="banner_right_img">
  <img draggable={false} src={banner2imgRight} alt=""></img>
</div>
</section> */}
          
          <PublishBook />
        {/* <section className="publish_book_sec">
          <img src={polygon01} className="publish_polygon" alt="polygon" />
          <img src={polygon03} className="publish_polygon_3" alt="polygon" />
          <div className="publishBgPattern">
            <img draggable={false} src={categorybk} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec_title">
                  <h2
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    How To Easily <span class="color-red">Publish</span> Your{" "}
                    <span class="color-red">Book</span>
                  </h2>
                </div>
                <div className="publish_book_content">
                  <img
                    draggable={false}
                    src={publishBookImg}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <Testimonial />

        {/* <section className="testimonial">
<img
  src={polygon01}
  className="testimonial_polygon"
  alt="polygon" 
/>
<img
  draggable={false}
  src={processFeather}
  className="process_feather"
  alt="feather"
/>
<div className="container">
  <div className="row align-items-center">
    <div className="col-lg-6 col-sm-10 mx-auto">
      <div className="testimonial_tabs" data-aos="fade-right"
        data-aos-offset="0"
        data-aos-duration="1000">
        <img
          draggable={false}
          src={testimonialGroupImg}
          className="img-fluid"
          alt=""
        />
      </div>
    </div>
    <div className="col-lg-6 col-sm-10 mx-auto">
      <div className="testimonial_tabs_content" data-aos="fade-left"
        data-aos-offset="0"
        data-aos-duration="2000">
        <div className="sec_title">
          <h2>
            <span className="color-red">TESTIMONIALS</span>
          </h2>
          <img
            src={testimonialQuote}
            className="testimonial_quotes"
            alt=""
          />
          <h4>Jhon Smith</h4>
          <p>
            “When an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem.
          </p>
          <img
            draggable={false}
            src={ratingStars}
            className="testimonial_stars"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>
</section> */}

        <section className="progress_sec">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-sm-10 mx-auto">
                <div className="progress_item">
                  <div className="sec_title">
                    <h2>
                      10+ YEAR OF <br />
                      EXPERIANCE
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-10 mx-auto">
                <div className="progress_item">
                  <div className="sec_title">
                    <h2>
                      700+ bOOK <br />
                      wRITTEN
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-10 mx-auto">
                <div className="progress_item">
                  <div className="sec_title">
                    <h2>
                      250+ AMERICAN
                      <br />
                      WRITERS
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CustomPublication />

        {/* <section className="publication_sec">
<img
  src={polygon01}
  className="publication_polygon"
  alt="polygon" 
/>
<img
  src={polygon03}
  className="publication_polygon_3"
  alt="polygon" 
/>
<div className="container">
  <div className="row align-items-center">
    <div className="col-lg-6 col-sm-10 mx-auto">
      <div className="publication_images" data-aos="fade-right"
        data-aos-offset="0"
        data-aos-duration="1000">
        <img
          draggable={false}
          src={publicationBook1}
          className="publicationBook1"
          alt=""
        />
        <img
          draggable={false}
          src={publicationBook2}
          className="publicationBook2"
          alt=""
        />
        <div className="audio_player">
          <audio controls>
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-sm-10 mx-auto">
      <div className="publication_content">
        <div className="sec_title">
          <h2 data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1000">
            Paperback <br />
            <span class="color-red">Publication</span>
          </h2>
          <p data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="2000">
            Your book's global accessibility is a top priority for us.
            Ensuring availability across all platforms, our
            comprehensive marketing and distribution strategies
            encompass both hardcover and paperback options. One source
            for everything you require, backed by our committed group of
            leading experts.
          </p>
          <h2 data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="3000">
            Online <br />
            <span class="color-red">Publication</span>
          </h2>
          <p data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="3000">
            We are highly satisfied with our capacity to transform
            aspiring authors into published ones by granting them
            unmatched authority over all aspects of their creative
            concept and publishing objectives, focusing on eBooks. Our
            all-encompassing assistance surpasses conventional
            publishing; we actively collaborate with you to formulate a
            resilient marketing strategy, guaranteeing a triumphant
            debut and optimizing your financial gains.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */}

        {/* <section class="faqs_sec">

<div className="publishBgPattern">
  <img draggable={false} src={categorybk} alt="" />
</div>
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <div class="sec_title">
        <h2 data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="2000">
          FREQUENTLY
          <span class="color-red">ASKED QUESTIONS</span>
        </h2>
      </div>
    </div>
    <div class="col-lg-6 col-sm-10 mx-auto">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span class="numbering">01.</span>
            <span class="card_btn_content">
              Lorem Ipsum is simply dummy text of the and typesetting
              industry.
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span class="numbering">02.</span>
            <span class="card_btn_content">
              Lorem Ipsum is simply dummy text of the and typesetting
              industry.
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span class="numbering">03.</span>
            <span class="card_btn_content">
              Lorem Ipsum is simply dummy text of the and typesetting
              industry.
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    <div class="col-lg-6 col-sm-10 mx-auto">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span class="numbering">04.</span>
            <span class="card_btn_content">
              Lorem Ipsum is simply dummy text of the and typesetting
              industry.
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span class="numbering">05.</span>
            <span class="card_btn_content">
              Lorem Ipsum is simply dummy text of the and typesetting
              industry.
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span class="numbering">06.</span>
            <span class="card_btn_content">
              Lorem Ipsum is simply dummy text of the and typesetting
              industry.
            </span>
          </Accordion.Header>
          <Accordion.Body>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  </div>
</div>
</section> */}

        <Faq />

        {/* <section class="get_touch_sec">
<div class="container">
  <div class="row">
    <div class="col-lg-4 col-sm-10 mx-auto">
      <div class="get_touch_img" data-aos="fade-right"
        data-aos-offset="0"
        data-aos-duration="1000">
        <img
          draggable={false}
          src={getTouchBook}
          class="img-fluid"
          alt=""
        />
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="get_touch_title">
        <div class="sec_title">
          <h2 data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="2000">
            TO BE
            <br />
            DESIGNED!
          </h2>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6">
      <div class="get_touch_form">
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <input
              type="tel"
              class="form-control"
              placeholder="Phone No"
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              placeholder="Message"
            ></textarea>
          </div>
          <button type="submit" class="brand_btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
</section> */}

        <GetTouch />

        {/* <section className="footer">
<div className="footer_inner_div">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-7 col-sm-12">
        <div className="row">
          <div className="col-md-12">
            <div className="footer_social">
              <div className="footer_social_item">
                <a href="javascript:;">
                  <img
                    draggable={false}
                    src={instagramIcon}
                    className="footer_social_iconImg"
                    alt=""
                  />
                </a>
                <div className="footer_social_text">
                  <p>
                    Followers <br />
                    <b>10K</b>
                  </p>
                </div>
              </div>
              <div className="footer_social_item">
                <a href="javascript:;">
                  <img
                    draggable={false}
                    src={facebookIcon}
                    className="footer_social_iconImg"
                    alt=""
                  />
                </a>
                <div className="footer_social_text">
                  <p>
                    Followers <br />
                    <b>121K</b>
                  </p>
                </div>
              </div>
              <div className="footer_social_item">
                <a href="javascript: void();">
                  <img
                    draggable={false}
                    src={youtubeIcon}
                    className="footer_social_iconImg"
                    alt=""
                  />
                </a>
                <div className="footer_social_text">
                  <p>
                    Followers <br />
                    <b>77K</b>
                  </p>
                </div>
              </div>
              <div className="footer_social_item">
                <a href="javascript:;">
                  <img
                    draggable={false}
                    src={twitterIcon}
                    className="footer_social_iconImg"
                    alt=""
                  />
                </a>
                <div className="footer_social_text">
                  <p>
                    Followers <br />
                    <b>2K</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_spacer"></div>
          <div className="col-md-4">
            <div className="footer_quick_links">
              <h3 className="footer_subhead">
                Ghostwriting <br />
                Services
              </h3>
              <ul className="footer_links">
                <li className="footer_link">
                  <a href="javascript">business books</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Nonfiction</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">memoir/autobiography</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">fiction</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Western Writing</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Romantic Writing</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Action Adventure</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Christian- Faith</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Drama Writing</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">eBook Writing</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Horror Writing</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Hip Hop Ghostwriters</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Article Writing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer_quick_links">
              <h3 className="footer_subhead">
                Publishing & <br /> Editing
              </h3>
              <ul className="footer_links">
                <li className="footer_link">
                  <a href="javascript">PR Publication</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Book Publishing</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Printing Books</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Self-Help Publishing Amazon</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Amazon Printing</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Book Formatting</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Book Review Template</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Children's Book Editing</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Proofreading Editing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer_quick_links">
              <h3 className="footer_subhead">
                Book Marketing and
                <br /> Production
              </h3>
              <ul className="footer_links">
                <li className="footer_link">
                  <a href="javascript">Book Cover Design</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Audio Book</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Illustrations</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Author Logo Design</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Author E-Commerce Website</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Book Video</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">Ebook Social Media Marketing</a>
                </li>
                <li className="footer_link">
                  <a href="javascript">EBook SEO</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-12">
        <div className="footer_avail">
          <h3 className="footer_avail-text">
            Avail $199 Value <br />
            Service For Free
          </h3>
          <button className="avail_btn">Avail Now</button>
          <div className="dmca_img">
            <img src={dmcaImg} alt="" />
          </div>
        </div>
        <div className="footer_payment">
          <h3 className="footer_payment-text">
            <span class="color-red">Secure</span> payment By
          </h3>
          <div className="dmca_img">
            <img src={paymentImg} alt="" />
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-lg-12">
        <div className="footer_extra_links">
          <ul className="footer_links">
            <li className="footer_link">
              <a href="javascript:;">About</a>
            </li>
            <li className="footer_link">
              <a href="javascript:;">Review</a>
            </li>
            <li className="footer_link">
              <a href="javascript:;">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_spacer"></div>
      <div className="col-md-12">
        <div className="footer_brand_imgs">
          <img src={footerBrandImgs} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="copyright_sec">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="copyright">
          <p>Copyright © 2024. All Rights Reserved</p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="footer_termCondition_links">
          <ul className="footer_links">
            <li className="footer_link">
              <a href="javascript:;">Privacy Policy</a>
            </li>
            <li className="footer_link">
              <a href="javascript:;">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */}
      </UserLayout>
    </>
  );
};
export default Home;
