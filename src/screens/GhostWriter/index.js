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
} from "../../asserts/images";
import InnerHero from "../../components/InnerHero";

const GhostWriter = () => {
  return (
    <>
      <UserLayout>
      <InnerHero />
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
                    BRILLIANT<span class="color-red">MINDS PUBLISH</span> HERE
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

          <div className="container-fluid p-0">
            <div>
              <div class="marquee-container trusted-partnerContainer">
                <div class="marquee">
                  <div class="trustedPartners">
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                    <div class="trustedPartner ">
                      <img draggable={false} src={siteScrollImg} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </UserLayout>
    </>
  );
};

export default GhostWriter;
