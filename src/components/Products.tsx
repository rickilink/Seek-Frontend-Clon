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
      color: "#223ad6",
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
  ];
  return (
    <section className=" py-5 bg-black">
      <div className="container ">
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
          <div className="row px-5 ">
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
                  <div className="col-6">
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
                  <div className="col-6 pt-5">
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
    </section>
  );
};
