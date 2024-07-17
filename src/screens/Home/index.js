import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Accordion from "react-bootstrap/Accordion";
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
} from "../../asserts/images";
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="header_topbar">
        <div className="container">
          <div className="col-md-4 ml-auto">
            <div className="topbar_main_content">
              <div className="header_icon_with_info">
                <Link className="header_topbar_icon">
                  <img src={phoneImg} alt="phone" className="img-fluid"></img>
                </Link>
                <Link>
                  <span className="header_topbar_info">13322826702</span>
                </Link>
              </div>
              <div className="header_icon_with_info">
                <Link className="header_topbar_icon">
                  <img
                    src={questionImg}
                    alt="phone"
                    className="img-fluid"
                  ></img>
                </Link>
                <Link>
                  <span className="header_topbar_info">Live Chat Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="hero_section">
        <div className="container">
          <Navbar expand="lg" className="">
            <Container>
              {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-between w-100">
                  <Nav.Link href="#home">
                    <p className="navbar_para">Ebook Publishers llc</p>
                    <p className="navbar_para_bottom">Consultation</p>
                  </Nav.Link>

                  <Nav.Link href="#link">
                    <p className="navbar_para">
                      Self <span className="header_light_bold">Publishing</span>
                    </p>
                    <p className="navbar_para_bottom">Publishing</p>
                  </Nav.Link>

                  <Nav.Link href="#link">
                    <p className="navbar_para">
                      Ghostwriting{" "}
                      <span className="header_light_bold">Services</span>
                    </p>
                    <p className="navbar_para_bottom">Writing</p>
                  </Nav.Link>

                  <Nav.Link href="#link">
                    <p className="navbar_para">
                      The Book{" "}
                      <span className="header_light_bold">Designer</span>
                    </p>
                    <p className="navbar_para_bottom">Production</p>
                  </Nav.Link>

                  <Nav.Link href="#link">
                    <p className="navbar_para">
                      Book <span className="header_light_bold">Editor</span>
                    </p>
                    <p className="navbar_para_bottom">Proofreading</p>
                  </Nav.Link>

                  <Nav.Link href="#link">
                    <p className="navbar_para">
                      <span className="header_light_bold">Marketing</span>
                    </p>
                    <p className="navbar_para_bottom">Branding</p>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <div>
                <img src={heroImgLeft} className="img-fluid" alt=""></img>
              </div>
            </div>

            <div className="col-md-4 align-self-center">
              <div className="hero_centered_main">
                <div className="hero_centered_content">
                  <div className="content_with_border">
                    <h2 className="brand_name_title">Welcome To Brand Name</h2>

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
              </div>
            </div>

            <div className="col-md-3">
              <div>
                <img src={heroImgRight} className="img-fluid" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="brilliant_mind_section">
        <div className="polygonImg01">
          <img src={polygon01} alt="polygon"></img>
        </div>

        <div className="polygonImg02">
          <img src={polygon01} alt="polygon"></img>
        </div>

        <div className="container">
          <div class="row">
            <div class="col-md-6">
              <div>
                <h2>BRILLIANT MINDS PUBLISH HERE</h2>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>

                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem.
                </p>

                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem.
                </p>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div className="book_main_box">
                <div className="book_semicircle_box">
                  <div className="first_semi">
                    <img src={semi01} alt="semi"></img>
                  </div>

                  <div className="second_semi">
                    <img src={semi02} alt="semi"></img>
                  </div>

                  <div className="third_semi">
                    <img src={semi03} alt="semi"></img>
                  </div>

                  <div className="circle_with_semi">
                    <img src={redCirclewithSemi} alt="semi"></img>
                  </div>

                  <div className="circle_with_semi2">
                    <img src={redCirclewithSemi} alt="semi"></img>
                  </div>
                </div>

                <div class="text-center book_img position-relative">
                  <img
                    src={brilliantBookImg}
                    className="img-fluid"
                    alt=""
                  ></img>

                  <div className="redCircleBehindBook">
                    <img src={redSemibehindBook} alt="red"></img>
                  </div>
                </div>

                <div>
                  <img src={boxBelowImg} class="img-fluid" alt=""></img>
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
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                  <div class="trustedPartner ">
                    <img src={siteScrollImg} alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="helping_things_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="helping_left_part">
                <div id="parent-circle">
                  <div className="duolingo_Under_img">
                    <img src={Imgundercircle} alt="thtye"></img>
                  </div>

                  <div class="circle blue">
                    <img
                      src={helpingIcon01}
                      alt="helpingIcon"
                      className="duolingo_tab_img"
                    ></img>
                    <h6 className="duolingo_tab_title">Book Publishing</h6>
                  </div>
                  <div class="circle pink">
                    <img
                      src={helpingIcon02}
                      alt="helpingIcon"
                      className="duolingo_tab_img"
                    ></img>
                    <h6 className="duolingo_tab_title">Ghost Writing</h6>
                  </div>
                  <div class="circle lime">
                    <img
                      src={helpingIcon03}
                      alt="helpingIcon"
                      className="duolingo_tab_img"
                    ></img>
                    <h6 className="duolingo_tab_title">Book Editing</h6>
                  </div>
                  <div class="circle orange">
                    <img
                      src={helpingIcon04}
                      alt="helpingIcon"
                      className="duolingo_tab_img"
                    ></img>
                    <h6 className="duolingo_tab_title">Ebook Writing</h6>
                  </div>
                  <div class="circle teal">
                    <img
                      src={helpingIcon05}
                      alt="helpingIcon"
                      className="duolingo_tab_img"
                    ></img>
                    <h6 className="duolingo_tab_title">Lorem Ipsum</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="main_helping_content">
                <h2>Things We Can Help You With</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="first_banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-7 align-self-center">
              <div className="first_banner_left_part">
                <h1>Lorem Ipsum Is A dummy Text</h1>

                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem.
                </p>
              </div>
            </div>

            <div className="col-md-5">
              <div className="first_banner_right_part">
                <div>
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
      </section>

      <section className="category_section">
        <div className="category_bk">
          <img src={categorybk} alt="bk"></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div class="sec_title" bis_skin_checked="1">
              <h2>
              <span class="color-red">Categories</span> We Cater for<span class="color-red">Authors</span></h2>
              </div>
            </div>

            <div className="col-md-7 ml-auto">
              <div className="category_circle">
                <div className="arc">
                  <div className="first_category">
                    <div className="first_category_detail">
                      <span className="category_details"></span>
                      <span className="category_detail_icon">
                        <img src={categoryIcon01} alt="cate"></img>
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
                        <img src={categoryIcon02} alt="cate"></img>
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
                        <img src={categoryIcon03} alt="cate"></img>
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
                        <img src={categoryIcon04} alt="cate"></img>
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
                        <img src={categoryIcon05} alt="cate"></img>
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
                    <img src={ImgUnderArc} alt="underArc"></img>
                    <img src={A4book} alt="a4" className="A4book"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="process_sec">
        <img src={processFeather} className="process_feather" alt='feather'></img>
      
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="sec_title">
                <h2>
                  The Process For <br />
                  <span class="color-red">Ebooks</span> We
                  <span class="color-red">Follow</span>
                </h2>
              </div>
            </div>
          </div>
          <div class="row process_rows">
            <div class="col-md-5">
              <div class="process_content">
                <h4 class="process_step">Step 1</h4>
                <h3 class="process_content_title">Crafting the Details</h3>
                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="process_img">
                <img
                  src={processImg01}
                  class="img-fluid"
                  alt="Crafting the Details"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="process_counter">
                <h1>01</h1>
              </div>
            </div>
          </div>
          <div class="row process_rows">
            <div class="col-md-5">
              <div class="process_content">
                <h4 class="process_step">Step 2</h4>
                <h3 class="process_content_title">
                  Publishing Your Masterpiece
                </h3>
                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="process_img">
                <img
                  src={processImg02}
                  class="img-fluid"
                  alt="Crafting the Details"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="process_counter">
                <h1>02</h1>
              </div>
            </div>
          </div>
          <div class="row process_rows">
            <div class="col-md-5">
              <div class="process_content">
                <h4 class="process_step">Step 3</h4>
                <h3 class="process_content_title">Reaching Your Readers</h3>
                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="process_img">
                <img
                  src={processImg03}
                  class="img-fluid"
                  alt="Crafting the Details"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="process_counter">
                <h1>03</h1>
              </div>
            </div>
          </div>

          <div class="row process_rows">
            <div class="col-md-5">
              <div class="process_content">
                <h4 class="process_step">Step 4</h4>
                <h3 class="process_content_title">
                  Designing a Beautiful Book
                </h3>
                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="process_img">
                <img
                  src={processImg04}
                  class="img-fluid"
                  alt="Crafting the Details"
                />
              </div>
            </div>
            <div class="col-md-3">
              <div class="process_counter">
                <h1>04</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="second_banner_section">
        <div className="banner_left_img">
          <img src={secondBannerImg01}></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <h2>Lorem Ipsum Is A dummy Text</h2>
                <p>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the
                  1960s with the release of Letraset sheets containing Lorem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faqs_sec">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="sec_title">
                <h2>
                  FREQUENTLY
                  <span class="color-red">ASKED QUESTIONS</span>
                </h2>
              </div>
            </div>
            <div class="col-md-6">
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
              
              {/* <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      <span class="numbering">01.</span>
                      <span class="card_btn_content">
                        Lorem Ipsum is simply dummy text of the and typesetting
                        industry.
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      <span class="numbering">01.</span>
                      <span class="card_btn_content">
                        Lorem Ipsum is simply dummy text of the and typesetting
                        industry.
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      <span class="numbering">01.</span>
                      <span class="card_btn_content">
                        Lorem Ipsum is simply dummy text of the and typesetting
                        industry.
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div class="col-md-6">
              {/* <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                    >
                      <span class="numbering">01.</span>
                      <span class="card_btn_content">
                        Lorem Ipsum is simply dummy text of the and typesetting
                        industry.
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                    >
                      <span class="numbering">01.</span>
                      <span class="card_btn_content">
                        Lorem Ipsum is simply dummy text of the and typesetting
                        industry.
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingSix">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                    >
                      <span class="numbering">01.</span>
                      <span class="card_btn_content">
                        Lorem Ipsum is simply dummy text of the and typesetting
                        industry.
                      </span>
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was
                    </div>
                  </div>
                </div>
              </div> */}
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
      </section>

      <section class="get_touch_sec">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="get_touch_title">
                <div class="sec_title">
                  <h2>
                    Stay in
                    <br />
                    touch
                    <br />
                    with Us!
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="get_touch_img">
                <img src={getTouchBook} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="col-md-4">
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
      </section>
    </>
  );
};
export default Home;
