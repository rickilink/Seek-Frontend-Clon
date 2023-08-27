import React from "react";
import Quotes from "../assets/QUOTES_white.svg";

export const Comments = () => {
  return (
    <section className="bg-black py-5">
      <div className="container-fluid px-5 ">
        <h2
          style={{
            fontSize: "3.5rem",
            fontFamily: "freight",
            fontWeight: "bold",
          }}
        >
          What our clients say about us.
        </h2>
        <div className="container-fluid px-5 w-75 text-center py-5">
          <img
            src={Quotes}
            style={{
              width: "50px",
              height: "50px",

              margin: "0 auto",
            }}
          ></img>
          <p className="py-5" style={{ fontSize: "1.2rem" }}>
            “Working with Seek has helped us deeply understand our customer’s
            journey in order to digitalize our processes and greatly improve the
            over all customer experience. It is also allowing us to address new
            business opportunities. The methodologies used by Seek allows us to
            quickly see results, always bringing user knowledge, business
            understanding, and industry trends to the table.”
          </p>

          <h5>Daniel San Román</h5>
          <h6>ISIL - Marketing Manager</h6>
        </div>
      </div>
    </section>
  );
};
