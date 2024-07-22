import React from 'react'
import './style.css'
import {
    boxBelowImg,
    polygon01,
    semi01,
    semi02,
    semi03,
    redCirclewithSemi,
    redSemibehindBook,
    
} from "../../asserts/images";
import Partners from '../Partners';
const Section2 = (props) => {
    return (
        <div>
            <section class={`brilliant_mind_section ${props.innerSec2Class}`}>
             {props?.polygon01 &&   <div className="polygonImg01">
                    <img draggable={false} src={props?.polygon01} alt="polygon"></img>
                </div>}

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
                                    {props.title}<span class="color-red"> {props.subtitle} </span> {props.title2}
                                </h2>
                                {props?.subtitle1 && <p class="subtititle2 color-red"> {props?.subtitle1}</p>}
                                <p
                                    data-aos="fade-right"
                                    data-aos-offset="0"
                                    data-aos-duration="2000"
                                >
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s,
                                </p>
                                {props?.subtitle2 && <p class="subtititle2 color-red"> {props?.subtitle2}</p>}
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
                                {props?.subtitle3 && <p class="subtititle2 color-red"> {props?.subtitle3}</p>}
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
                                <div  className=' flex'> 
                           {props.btn1 &&     <button
                                    type="submit"
                                    class="brand_btn"
                                    data-aos="fade-right"
                                    data-aos-offset="0"
                                    data-aos-duration="2000"
                                >
                                {props.btn1 }
                                </button>}
                                {props.btn2 &&     <button
                                    type="submit"
                                    class="brand_btn"
                                    data-aos="fade-right"
                                    data-aos-offset="0"
                                    data-aos-duration="2000"
                                >
                                 { props.btn2 }
                                </button>}
                                </div>
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
                                        src={props?.image}
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

                <Partners/>
            </section>
        </div>
    )
}

export default Section2
