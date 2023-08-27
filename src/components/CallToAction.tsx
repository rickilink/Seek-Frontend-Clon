import React from "react";

export const CallToAction = () => {
  return (
    <section
      className="bg-black px-3 py-5"
      style={{ paddingTop: "100px", marginBottom: "110px" }}
    >
      <h2
        className="text-center py-5"
        style={{
          fontSize: "3.5rem",
          fontFamily: "freight",
          fontWeight: "bold",
        }}
      >
        Got a project in mind? <br />
        <a
          href="https://seekglobal.co/en/contact-us/"
          target="_blank"
          referrer="noreferrer"
          style={{
            textDecoration: "none",
            borderBottom: "2px solid #fff",
            color: "white",
          }}
        >
          Let's talk
        </a>
      </h2>
    </section>
  );
};
