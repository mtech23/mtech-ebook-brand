import React, { useState } from "react";
import {
  A4book,
  A4book1,
  categorybk,
  categoryIcon01,
  categoryIcon02,
  categoryIcon03,
  categoryIcon04,
  categoryIcon05,
  ImgUnderArc,
  polygon01,
} from "../../asserts/images";

const categories = [
  {
    id: "fiction",
    title: "Fiction",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: categoryIcon01,
    className: "first_category",
    image: A4book,
  },
  {
    id: "children",
    title: "Children",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: categoryIcon02,
    className: "second_category",
    image: A4book1,
  },
  {
    id: "comic",
    title: "Comic",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: categoryIcon03,
    className: "third_category",
    image: A4book,
  },
  {
    id: "action",
    title: "Action",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: categoryIcon04,
    className: "forth_category",
    image: A4book1,
  },
  {
    id: "romance",
    title: "Romance",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: categoryIcon05,
    className: "fifth_category",
    image: A4book,
  },
];

const CustomCategory = (props) => {
  const [activeTab, setActiveTab] = useState(categories[2]);

  return (
    <>
      <section className={props.className}>
        {props?.polygon01 && (
          <div className="category_polygonImg01">
            <img draggable={false} src={props?.polygon01} alt="polygon"></img>
          </div>
        )}
        {props?.image && (
          <div className="category_bk">
            <img draggable={false} src={props?.image} alt="bk"></img>
          </div>
        )}

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div class="sec_title" bis_skin_checked="1">
                <h2
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <span class="color-red">Categories </span> We Cater for
                  <span class="color-red">
                    {" "}
                    <br />
                    Authors
                  </span>
                </h2>
              </div>
            </div>

            <div className="col-sm-12 col-lg-7 ml-auto">
              <div className="category_circle">
                <div className="arc">
                  {categories.map((item, index) => {
                    const isActive2 = activeTab.id === item.id;
                    return (
                      <div
                        className={`${item.className} ${
                          isActive2 ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(item)}
                      >
                        <div className="first_category_detail">
                          <span className="category_details"></span>
                          <span className="category_detail_icon">
                            <img
                              draggable={false}
                              // src={categoryIcon01}
                              src={item.icon}
                              alt="cate"
                            ></img>
                          </span>
                          <span className="category_detail_desc">
                            <h6 class="category_detail_title m-0">
                              {item.title}
                            </h6>
                            <p className="category_detail_para m-0">
                              {item.desc}
                            </p>
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="first_category">
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
                  </div> */}

                  <div className="imgUnderArc">
                    <img
                      draggable={false}
                      src={ImgUnderArc}
                      alt="underArc"
                    ></img>
                    <img
                      draggable={false}
                      // src={A4book}
                      src={activeTab.image}
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
  );
};

export default CustomCategory;
