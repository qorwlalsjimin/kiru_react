import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductNavigation from '../components/ProductNavigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import '../styles/common/Product.css';

export default function ProductList({category_id}) {
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
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`/api/item/item_list/${category_id}`)
      .then((datas) => {
        setProducts(datas.data);
      });
  }, [setProducts]);

  console.log("여기");
  console.log(products);

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="d-flex justify-content-center mt-5">{category_name}</Col>
          <Col className="d-flex justify-content-center mt-3"><ProductNavigation category_id={category_id}/></Col>
        </Row>
        <Row className="item_list">
          {/* 상품 목록 */}
          {products.map((product)=>{
            return <Product key={`key-${product.itemId}`} product={product}/>
          })}
        </Row>
      </Container>
    </>
  );
}