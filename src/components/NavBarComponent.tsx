import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBarComponent() {
  const expand = "lg";
  return (
    <>
      <Navbar key={1} expand={expand} className="bg-black  px-5 py-4">
        <Container fluid className="">
          <Navbar.Brand href="#">SEEK</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Title Here 24
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 ">
                <Nav.Link href="#action1" className="text-white pe-4">
                  About Us
                </Nav.Link>
                <Nav.Link href="#action2" className="text-white pe-4">
                  Expertise
                </Nav.Link>
                <Nav.Link href="#action2" className="text-white pe-4">
                  Our work
                </Nav.Link>
                <Nav.Link href="#action2" className="text-white pe-4">
                  Contact Us
                </Nav.Link>
                <Nav.Link href="#action2" className="text-white pe-4">
                  ES
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarComponent;
