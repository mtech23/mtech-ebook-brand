import React, { useEffect } from "react";
import {
  polygon01,
  processFeather,
  ratingStars,
  testimonialGroupImg,
  testimonialQuote,
  userImg01,
  testImg1,
  testImg2,
  testImg3,
  testImg4,
  testImg5,
  testImg6,
  testImg7,
  testImg8,
} from "../../asserts/images";
import "./style.css";

import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Testimonial = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    const path = document.querySelector("#circularPath");

    boxes.forEach((box, index) => {
      const totalBoxes = boxes.length;
      const duration = 5;

      gsap.to(box, {
        motionPath: {
          path: path,
          align: path,
          alignOrigin: [2.9, 0.5],
          start: index / totalBoxes,
          end: (index + 1) / totalBoxes,
          immediateRender: true,
        },
        duration: duration,
        repeat: -1, // Repeat infinitely
        ease: "linear",
        yoyo: false,
      });
    });
  }, []); // Empty dependency array means this effect runs once on mount
  return (
    <>
      <section className="testimonial">
        <img src={polygon01} className="testimonial_polygon" alt="polygon" />
        <img
          draggable={false}
          src={processFeather}
          className="process_feather"
          alt="feather"
        />
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <div className="sec_title text-center">
                <h2>
                  <span className="color-red">Testimonial</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-8 mx-auto">
              <div
                className="testimonial_tabs"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
              >
                <div className="circle">
                  <svg width="100%" height="100%" viewBox="0 0 500 500">
                    <path
                      id="circularPath"
                      fill="none"
                      stroke="#ed0742"
                      d="M 250,250 m -200,0 a 200,200 0 1,1 400,0 a 200,200 0 1,1 -400,0"
                    />
                  </svg>

                  <div
                    className="box"
                    style={{ backgroundImage: `url(${testImg1})` }}
                  ></div>
                  <div
                    className="box"
                    style={{ backgroundImage: `url(${testImg2})` }}
                  ></div>
                  <div
                    className="box"
                    style={{ backgroundImage: `url(${testImg3})` }}
                  ></div>
                  <div
                    className="box"
                    style={{ backgroundImage: `url(${testImg4})` }}
                  ></div>
                  <div
                    className="box"
                    style={{ backgroundImage: `url(${testImg5})` }}
                  ></div>
                  <div
                    className="box"
                    style={{ backgroundImage: `url(${testImg6})` }}
                  ></div>
                  <div
                    className="box"
                    style={{ backgroundImage: `url(${testImg7})` }}
                  ></div>
                  <div
                    className="box"
                    style={{ backgroundImage: `url(${testImg8})` }}
                  ></div>
                </div>
                {/* <img
                  draggable={false}
                  src={testimonialGroupImg}
                  className="img-fluid"
                  alt=""
                /> */}

                {/* <div id="parent-circle-02">
                        <div class="circle02 blue">
                         
                        </div>
                        <div class="circle02 pink"></div>
                        <div class="circle02 lime"></div>
                        <div class="circle02 orange"></div>
                        <div class="circle02 teal"></div>
                        <div class="circle02 green">
                            <div className='circleUserImg'>
                            <img src={userImg01} alt='user' className='userImg'></img>
                           </div>
                        </div>
                        <div class="circle02 white"></div>
                        <div class="circle02 black"></div>
                    </div> */}
              </div>
            </div>
            {/* <div className="col-lg-6 col-sm-10 mx-auto">
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
