import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/user" className="nav-link">Add User</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
