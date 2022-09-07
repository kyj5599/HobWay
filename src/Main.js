import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Footer from "./Footer";
import "./Main.css";
import Map from "./Map";
import Slide from "./Slide";

const Main = () => {
  return (
    <div className="wrap">
      <div className="Nav">
        <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Navbar.Brand href="#home">
                <img
                  className="logo"
                  src="https://raw.githubusercontent.com/MSY1126/Cloud_A_-/main/hobway.png"
                />
              </Navbar.Brand>
            </Navbar.Collapse>
            <Nav>
              <Nav.Link
                href="#deets"
                style={{
                  color: "#666666",
                  fontWeight: "bold",
                }}
              >
                데이터 출처
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                style={{
                  color: "#666666",
                  fontWeight: "bold",
                }}
              >
                로그인
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <hr className="hr" />
      </div>
      <Slide />
      <Map />
      <Footer />
    </div>
  );
};

export default Main;
