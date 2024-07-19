import React from 'react'
import { polygon01, processFeather, ratingStars, testimonialGroupImg, testimonialQuote, userImg01 } from '../../asserts/images'
import "./style.css";

const Testimonial = () => {
  return (
    <>
          <section className="testimonial">
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
      </section>
    </>
  )
}

export default Testimonial