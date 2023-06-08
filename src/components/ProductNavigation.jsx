import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, Link } from 'react-router-dom';
import '../styles/common/Nav.css';
import { ReactComponent as Circle } from "../svgfiles/circle.svg";

export default function ProductNavigation({ category_id }) {
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
    <Container className="nav_container d-flex justify-content-center">
      <Row className="product">
        <Col md={12} className="d-flex justify-content-center">

          <NavLink to={"/" + category_name + "/all"} className={"pe-5"} style={{ textDecoration: 'none' }}>
            <div className="nav_text text-center">
              <Circle /><br />
              <span className="first">All</span>
            </div>
          </NavLink>

          <NavLink to={"/" + category_name + "/best"} className={"nav_text pe-5"} style={{ textDecoration: 'none' }}>
            <div className="text-center">
              <Circle /><br />
              <span>Best</span>
            </div>
          </NavLink>

          <NavLink to={"/" + category_name + "/brand"} className={"nav_text pe-0"} style={{ textDecoration: 'none' }}>
            <div className="text-center">
              <Circle /><br />
              <span>Brand</span>
            </div>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}