import {Container, Nav, Navbar} from "react-bootstrap";

export default function AppNavbar() {
    return <Navbar expand="lg" className="py-3" sticky="top" bg="body">
        <Container>
            <Navbar.Brand href="#" className="fw-bold fs-5">
                <span className="accent-text">◆</span>
                Theme Lab
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="nav"/>
            <Navbar.Collapse id="nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#components">Components</Nav.Link>
                    <Nav.Link href="#tokens">Tokens</Nav.Link>
                </Nav>
                {/*<ThemeSwitcher />*/}
            </Navbar.Collapse>
        </Container>
    </Navbar>
}