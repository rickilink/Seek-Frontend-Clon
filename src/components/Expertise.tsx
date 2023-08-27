import React from "react";
import Circles from "../assets/CIRCLES_white.svg";

export const Expertise = () => {
  return (
    <section className="bg-black px-5">
      <h1
        style={{
          fontSize: "4rem",
          fontFamily: "freight",
          fontWeight: "semibold",
        }}
        className="py-5"
      >
        Our Expertise
      </h1>
      <div className="w-75 mx-auto py-5">
        <img src={Circles} className="py-5 my-5 "></img>
      </div>

      <div className="container-fluid w-75 pb-5 mb-5 ">
        <div className="row">
          <div className="col-6 bg-black ">
            <h5 className="py-3" style={{ fontWeight: "semibold" }}>
              Strategy, Research & Discovery
            </h5>
            <p className="py-3 ">
              <span style={{ fontWeight: "semibold" }}>
                1. High value strategy:
              </span>{" "}
              We design new business models, define value propositions, and
              build go to market strategies along with digital product roadmaps.
            </p>
            <p className="py-3">
              <span style={{ fontWeight: "semibold" }}>
                2. Research and Discovery:
              </span>{" "}
              We seek to transform the future based on high-impact research
              under a human-centered design approach.
            </p>
          </div>
          <div className="col-6  bg-black">
            <h5 className="py-3" style={{ fontWeight: "semibold" }}>
              Experience, Design & Technology
            </h5>
            <p className="py-3">
              <span style={{ fontWeight: "semibold" }}>
                3. Product & Experience Design:
              </span>{" "}
              We create human centered digital products that inspire, and offer
              fascinating experiences, allowing your company to achieve
              excellent results.
            </p>
            <p className="py-3">
              <span style={{ fontWeight: "semibold" }}>
                4. Software Development:
              </span>{" "}
              We bring innovative solutions with cutting-edge technologies that
              allow you to grow and scale rapidly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
