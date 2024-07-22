import React from "react";
import {
    
  } from "../../asserts/images";

const InnerHero = () => {
  return (
    <section className="inner-hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="inner-hero_content">
              <div className="sec_title">
                <h2>
                  Behind Every Great Story, There's A{" "}
                  <span class="color-red">Ghostwriter!</span>
                </h2>
                <p>
                  We understand that every story deserves to be told, but not
                  every author has the time, expertise, or inclination to write
                  it themselves. That's where our Ghostwriting Services come in.
                  We pride ourselves on being the invisible hand behind many
                  captivating narratives, helping individuals, businesses, and
                  celebrities share their stories with the world.
                </p>
                <button className="brand_btn">Let’s Discuss Project</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="inner-hero_badges">
                <img src="" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerHero;
