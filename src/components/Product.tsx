interface Properties {
  title: string;
  imageUrl: string;
  imageTitle: string;
  description: string;
  url: string;
  color: string;
  comingSoon: boolean;
}

export const Product = (product: Properties) => {
  return (
    <div className="px-5 py-5">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: product.color,
          width: "100%",
          height: "450px",
        }}
      >
        <p
          style={{
            fontSize: "4rem",
            fontFamily: "freight",
            fontWeight: "semibold",
          }}
        >
          {product.imageTitle}
        </p>
      </div>
      <div className="py-3">
        <h2 className="" style={{ fontSize: "1rem" }}>
          {product.title}
        </h2>
        {product.comingSoon && (
          <p className="py-3" style={{ fontSize: "1.7rem" }}>
            Coming soon
          </p>
        )}
        <p className="pt-3" style={{ fontSize: "1.7rem" }}>
          {product.description}
        </p>
        {!product.comingSoon && (
          <a
            href={product.url}
            target="_blank"
            referrer="noreferrer"
            style={{
              textDecoration: "none", // Remove default underline
              borderBottom: "2px solid transparent", // Initial transparent line
              transition: "border-color 0.3s ease", // Transition effect on hover
              color: "black", // Text color
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "blue"; // Color when hovering
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "transparent"; // Reset when not hovering
            }}
          >
            Read the case study
          </a>
        )}
      </div>
    </div>
  );
};
