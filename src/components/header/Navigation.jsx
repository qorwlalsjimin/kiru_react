import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import '../../styles/common/Nav.css';

function Navigation() {
  return (
    <Container fluid className="nav d-flex justify-content-center">
        <Row >
          <Col md={12} className="d-flex justify-content-center">
            <NavLink to="/" className="my-4"><img src="/images/logo.png"/></NavLink>
          </Col>
          <Col md={12} className="d-flex justify-content-center">
            <NavLink to="/improv" className="nav_text pe-4" style={{ textDecoration: 'none' }}>개량</NavLink>
            <NavLink to="/trad"   className="nav_text pe-4" style={{ textDecoration: 'none' }}>전통</NavLink>
            <NavLink to="/shoes"  className="nav_text pe-4" style={{ textDecoration: 'none' }}>신발</NavLink>
            <NavLink to="/acc"    className="nav_text pe-0" style={{ textDecoration: 'none' }}>악세서리</NavLink>
          </Col>
        </Row>
      {/* <Form className="d-flex">
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Container>
  );
}
export default Navigation;