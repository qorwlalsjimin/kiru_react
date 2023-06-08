import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import '../styles/common/Nav.css';
import { useState } from 'react';

export default function ProductNavigation({category_id}) {
  /* 카테고리 id로 이름 넣어주기 */
  let category_name;
  switch (category_id) {
    case "110":
      category_name = "trad";
      break;
    case "120":
      category_name = "improv";
      break;
    case "130":
      category_name = "shoes";
      break;
    case "140":
      category_name = "acc";
      break;
    default:
      category_name = "null";
      break;
  }

  return (
    
    <Container fluid className="d-flex justify-content-center">
        <Row >
          <Col md={12} className="d-flex justify-content-center">
            <NavLink to={category_name+"/all"} className={"nav_text pe-5"} style={{ textDecoration: 'none' }}>All</NavLink>
            <NavLink to={category_name+"/best"} className={"nav_text pe-5"} style={{ textDecoration: 'none' }}>Best</NavLink>
            <NavLink to={category_name+"/brand"} className={"nav_text pe-0"} style={{ textDecoration: 'none' }}>Brand</NavLink>
          </Col>
        </Row>
      {/* <Form className="d-flex">
        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
        <Button variant="outline-success">Search</Button>
      </Form> */}
    </Container>
  );
}