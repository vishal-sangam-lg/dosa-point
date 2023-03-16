import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./DPNavbar.module.css";

export default function DPNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={styles.NavContainer}
    >
      <Container>
        <Navbar.Brand href="#home">Dosa Point</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav className={styles.navbar}>
            <Nav.Link href="#order">Order</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
