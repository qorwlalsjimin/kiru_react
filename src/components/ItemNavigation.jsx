import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import '../styles/common/Nav.css';
import { useState } from 'react';

export default function ItemNavigation() {

  let isActive;
  const giveActive = () => {
    isActive = true;
  };

  return (
    
    <Container fluid className="d-flex justify-content-center">
        <Row >
          <Col md={12} className="d-flex justify-content-center">
            <p className={(isActive?"active":"") + "nav_text pe-5"} onClick={giveActive} style={{ textDecoration: 'none' }}>All</p>
            <p className="nav_text pe-5" onClick={giveActive} style={{ textDecoration: 'none' }}>Best</p>
            <p className="nav_text pe-0" onClick={giveActive} style={{ textDecoration: 'none' }}>Brand</p>
          </Col>
        </Row>
      {/* <Form className="d-flex">
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Container>
  );
}