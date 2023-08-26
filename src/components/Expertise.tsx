import React from "react";

export const Expertise = () => {
  return (
    <section className="bg-black px-5">
      <h1
        style={{
          fontSize: "4.4rem",
          fontFamily: "freight",
          fontWeight: "semibold",
        }}
        className="py-3"
      >
        Our Expertise
      </h1>
      <img
        src="https://picsum.photos/1000/600"
        className="bg-secondary mb-3"
        style={{ height: "600px", width: "1000px", margin: "0 auto" }}
      ></img>

      <div className="container w-75">
        <div className="row ">
          <div className="col-6 bg-black">
            <h4 className="py-3">Strategy, Research & Discovery</h4>
            <p className="py-3">
              1. High value strategy: We design new business models, define
              value propositions, and build go to market strategies along with
              digital product roadmaps.
            </p>
            <p className="py-3">
              2. Research and Discovery: We seek to transform the future based
              on high-impact research under a human-centered design approach.
            </p>
          </div>
          <div className="col-6  bg-black">
            <h4 className="py-3">Experience, Design & Technology</h4>
            <p className="py-3">
              3. Product & Experience Design: We create human centered digital
              products that inspire, and offer fascinating experiences, allowing
              your company to achieve excellent results.
            </p>
            <p className="py-3">
              4. Software Development: We bring innovative solutions with
              cutting-edge technologies that allow you to grow and scale
              rapidly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
