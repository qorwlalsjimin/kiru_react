import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductNavigation from '../components/product/ProductNavigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/product/Product';
import '../styles/common/Product.css';

export default function ProductList({ category_id, convertPrice }) {
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
    //TODO NavLink 클릭했을때 여기 실행이 안 됨
    //온클릭으로 하면 될듯
    console.log(category_id);
    axios.get(`/api/item/item_list/${category_id}`)
      .then((datas) => {
        setProducts(datas.data);
      });
  }, [setProducts]);


  console.log("여기");
  console.log(products.length);

  return (
    <>
      <Container>
        <Row>{/* 카테고리 이름 + nav */}
          <Col md={12} className="category_name d-flex justify-content-center mt-5">{category_name}</Col>
          <Col className="d-flex justify-content-center"><ProductNavigation category_id={category_id} /></Col>
        </Row>

        <Row className="item_list">{/* 상품 목록 */}
          {products.map((product, index) => {
            if (index == 16) console.log("더보기");
            return <Product key={`key-${product.itemId}`} convertPrice={convertPrice} product={product} />
          })}
        </Row>
      </Container>
    </>
  );
}