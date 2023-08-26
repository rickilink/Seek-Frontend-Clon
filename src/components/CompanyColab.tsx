interface Company {
  logo: string;
  title: string;
}

export const CompanyColab = (company: Company) => {
  return (
    <div className="col-12 col-md-6 d-flex  align-items-center">
      <img src={company.logo} width={100}></img>
      <div
        style={{
          width: "2px",
          height: "32px",
          backgroundColor: "#fff",
          margin: "0 20px ",
        }}
      ></div>
      <p className="pe-5">{company.title}</p>
    </div>
  );
};
