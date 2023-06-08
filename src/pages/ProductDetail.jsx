import { Container, Row, Col,Accordion,Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common/Product.css';
import { useParams } from 'react-router-dom';
import { ReactComponent as Star } from "../svgfiles/star.svg";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductDetail({convertPrice}) {
  const { item_id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  useEffect(()=>{
    axios.get(`/api/item/${item_id}`).then((data)=>{
      setProduct(data.data);
    })
  }, [])
  
  //https://velog.io/@seokkitdo/React-Uncaught-TypeError-Cannot-read-properties-of-undefined-reading-0
  // let imgUrl = product.imageUrl;
  // console.log(imgUrl[0]);

  return (
    <>
      <Container className="detail">
        <Row className="mt-5 pt-5">
          <Col md={6}>{/* img */}
            <div className="text-center">{/* 사진+그림자 */}
              <img className="main-img" src={product.imageUrl} alt="상품 이미지" />
              <img src="/images/shadow.png" style={{ width: "236px" }} />
            </div>
          </Col>
          <Col md={1}></Col>
          <Col className="pt-2">{/* text */}
            <div className="d-flex justify-content-between">
              <span className="title">{product.name}</span>
              <Star margintop="7px"/>
            </div>
            <span className="price">{convertPrice(+product.price)}원</span>
            <p className="desc mt-4 mb-5">{product.description}</p>

            <p className="desc-color">색상을 선택해주세요.</p>
            <span className="color-name">옥색</span><br />
            
            <button className="rent">대여신청하기</button>
            <button className="cart">장바구니</button>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
}