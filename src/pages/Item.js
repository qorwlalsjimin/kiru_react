import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemNavigation from '../components/ItemNavigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

export default function Item({category_id}) {
  /* 카테고리 id로 이름 넣어주기 */
  let category_name;
  switch (category_id) {
    case "110":
      category_name = "전통한복";
      break;
    case "120":
      category_name = "개량한복";
      break;
    case "130":
      category_name = "신발";
      break;
    case "140":
      category_name = "악세서리";
      break;
    default:
      category_name = "null";
      break;
  }

  /* api로 상품 목록 받아오기 */
  useEffect(() => {
    fetch(`/api/item/item_list/${category_id}`)
      .then(res => res.json())
      .then(datas => {
        console.log(datas);
        for(let data of datas){
          console.log(data.name, data.price, 
            data.category.title, data.heart);

        }
      });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center mt-5">{category_name}</Col>
          <Col className="d-flex justify-content-center mt-3"><ItemNavigation/></Col>

        </Row>
      </Container>
    </>
  );
}