import React from "react";
import { CompanyColab } from "./CompanyColab";

export const Colaborators = () => {
  const companies = [
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/bmw.png",
      title: "Worldwide leading luxury car sales company",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/primax.png",
      title:
        "#1 Oil and gas company and highest revenue generating company in Peru",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/belcorp.png",
      title:
        "Multinational beauty company with + USD 1 Billion in annual revenue",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/inr-etal.png",
      title:
        "#1 Retail corporation and second highest revenue generating company in Peru",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/hocchild.png",
      title:
        "Leading mining company in the Americas with + USD 900 MM in annual revenue",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/tinka.png",
      title: "#1 Lottery and sports bet company in Peru",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/minsur.png",
      title:
        "Top mining company in Peru with + USD 1 Billion in annual revenue",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/agora.png",
      title: "Peru’s most robust SuperApp (Intercorp Group)",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/Unilabs.png",
      title: "Leading international provider of diagnostical services",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/OH.png",
      title: "One of Peru’s leading financial service companies",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/pacifico-1.png",
      title:
        "One of Peru's leading insurance companies with annual revenue of over USD 400 MM",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/subartu.png",
      title: "Worldwide leading car sales company",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/utec.png",
      title: "Peru’s leading engineering, technology and innovation university",
    },
    {
      logo: "https://seekglobal.co/wp-content/uploads/2023/07/isil.png",
      title:
        "One of Peru’s most prestigious education institute with + 15,000 students",
    },
  ];
  return (
    <section className="bg-black py-5">
      <div className="container-fluid px-5 ">
        <h2
          style={{
            fontSize: "3.5rem",
            fontFamily: "freight",
            fontWeight: "semibold",
          }}
        >
          We work with companies around the globe collaborating on high - level
          challenges that impact and inspire, achieving nothing less than
          excellent results.
        </h2>
        <div className="container-fluid py-5">
          <div className="row">
            {companies.map((company) => (
              <CompanyColab logo={company.logo} title={company.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
