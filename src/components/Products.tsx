import React from "react";
import { Product } from "./Product";

export const Products = () => {
  const ProductsInfo = [
    {
      imageUrl: "https://picsum.photos/400/300",
      imageTitle: "AGORA",
      title: "AGORA",
      comingSoon: false,
      color: "#00c9fc",
      description:
        "Super App design for one of LATAM’s largest conglomerates: Intercorp.",
      url: "https://seekglobal.co/proyectos/agora/",
    },
    {
      imageUrl: "https://picsum.photos/400/300",
      imageTitle: "TINKA",
      title: "LA TINKA",
      comingSoon: false,
      color: "#fcf400",
      description:
        "Software development teams for Peru’s largest lottery holding.",
      url: "https://seekglobal.co/proyectos/la-tinka/",
    },
    {
      imageUrl: "https://picsum.photos/400/300",
      imageTitle: "PRIMAX",
      comingSoon: true,
      title: "PRIMAX",
      color: "#ff7e00",
      description:
        "Research, ideation and strategic app design for a world class brand.",
      url: "https://example.com/image3",
    },
    {
      imageUrl: "https://picsum.photos/400/300",
      imageTitle: "BMW",
      title: "BMW",
      comingSoon: false,
      color: "#223ad6",
      description:
        "Strategic design partnership with an international oil & gas leader in Latam.",
      url: "https://seekglobal.co/proyectos/bmw/",
    },
    {
      imageUrl: "https://picsum.photos/400/300",
      imageTitle: "FERREYROS",
      title: "FERREYROS",
      comingSoon: false,
      color: "#ffdc00",
      description:
        "Design and development of a B2B Extranet for a billion dollar company.",
      url: "https://seekglobal.co/en/projects/ferreyros/",
    },
    {
      imageUrl: "https://picsum.photos/400/300",
      imageTitle: "IPP",
      title: "INSTITUTO PERUANO DE PUBLICIDAD",
      comingSoon: false,
      color: "#e05e5e",
      description:
        "Website redesign and development for Peru’s most prestigious advertising institution.",
      url: "https://seekglobal.co/en/projects/ferreyros/",
    },
    {
      imageUrl: "https://picsum.photos/400/300",
      imageTitle: "DELFIN ",
      title: "DELFIN AMAZON CRUISES",
      comingSoon: false,
      color: "#4da325",
      description:
        "Design and software development for a high – end, world class hotel.",
      url: "https://seekglobal.co/en/projects/ferreyros/",
    },
    {
      imageUrl: "https://picsum.photos/400/300",
      imageTitle: "INTERCORP",
      title: "INTERCORP",
      comingSoon: true,
      color: "#223ad6",
      description:
        "Multi – Company partnership with one of Peru’s largest conglomerates.",
      url: "https://seekglobal.co/en/projects/ferreyros/",
    },
    {
      imageUrl: "https://picsum.photos/400/300",
      imageTitle: "HOCHSCHILD",
      title: "HOCHSCHILD",
      comingSoon: true,
      color: "#353535",
      description:
        "Designing a digital recognition program for a leading mining company in the Americas.",
      url: "https://seekglobal.co/en/projects/ferreyros/",
    },
    {
      imageUrl: "https://picsum.photos/400/300",
      imageTitle: "ISIL",
      title: "ISIL",
      comingSoon: true,
      color: "#00c9fc",
      description:
        "Disruption through innovation. Redesigning the career test for a +15,000 student education institute.",
      url: "https://seekglobal.co/en/projects/ferreyros/",
    },
  ];
  return (
    <section className="py-5 px-5 bg-black">
      <div className="container-fluid ">
        <h2
          style={{
            fontSize: "3.5rem",
            fontFamily: "freight",
            fontWeight: "semibold",
          }}
        >
          We offer result oriented multidisciplinary squads involved in top
          notch projects and nearshore staffing services with an aggregate
          value.
        </h2>
        <p className="py-3">
          As strategic partners, we are involved in high value end-to-end
          projects that focus on long-term challenges. We also offer flexible
          and efficient staffing services, in order to strengthen your team with
          top talent, allowing your company to focus on critical and core
          business processes.
        </p>

        <div className="container">
          <div className="row px-5 py-5 ">
            {ProductsInfo.map(
              (
                {
                  title,
                  description,
                  imageUrl,
                  url,
                  color,
                  imageTitle,
                  comingSoon,
                },
                index
              ) =>
                index % 2 === 0 ? (
                  <div className="col-6 px-4">
                    <Product
                      description={description}
                      comingSoon={comingSoon}
                      title={title}
                      imageUrl={imageUrl}
                      color={color}
                      url={url}
                      imageTitle={imageTitle}
                    />
                  </div>
                ) : (
                  <div className="col-6 pt-5 px-4">
                    <Product
                      description={description}
                      imageTitle={imageTitle}
                      comingSoon={comingSoon}
                      title={title}
                      color={color}
                      imageUrl={imageUrl}
                      url={url}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className="text-center py-5">
        <a
          href=""
          target="_blank"
          referrer="nonreferrer"
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "semibold",
          }}
        >
          VIEW MORE PROJECTS
        </a>
      </div>
    </section>
  );
};
