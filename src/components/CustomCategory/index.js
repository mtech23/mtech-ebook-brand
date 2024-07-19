import React from 'react'
import { A4book, categorybk, categoryIcon01, categoryIcon02, categoryIcon03, categoryIcon04, categoryIcon05, ImgUnderArc, polygon01 } from '../../asserts/images'

const CustomCategory = () => {
  return (
    <>
           <section className="category_section">
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
                  <span class="color-red">Categories </span> We Cater for
                  <span class="color-red"> Authors</span>
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
      </section>
    </>
  )
}

export default CustomCategory