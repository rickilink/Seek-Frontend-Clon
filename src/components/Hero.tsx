import heroImage from "../assets/HeroImage.svg";

export const Hero = () => {
  return (
    <section className="container-fluid px-5 bg-black pb-5 ">
      <div className="row">
        <div className="col-6 py-3">
          <h1
            className="pe-5"
            style={{
              fontSize: "4.4rem",
              fontFamily: "freight",
              fontWeight: "bold",
            }}
          >
            Strategy, design & innovation
          </h1>
          <p className=" py-4  " style={{ fontSize: "1.1rem" }}>
            We are a human-centered, digital product design and software
            development company dedicated to solve key business challenges
            through an integrated vision of strategy, design and cutting-edge
            technology. We operate with agile methodologies, fostering
            continuous collaboration throughout the project lifecycle and offer
            nearshore staff augmentation services that allow your company to
            focus on critical and core business processes.
          </p>
        </div>
        <img src={heroImage} height={500} className="col-6"></img>
      </div>
    </section>
  );
};
