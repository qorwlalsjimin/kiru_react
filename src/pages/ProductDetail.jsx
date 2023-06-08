import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common/Product.css';
import { useParams } from 'react-router-dom';
import { ReactComponent as Star } from "../svgfiles/star.svg";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductDetail({ convertPrice }) {
  const { item_id } = useParams(); //상품 id
  const [product, setProduct] = useState({}); //상품
  const [count, setCount] = useState(1); //상품 개수

  /* api에서 상품 가져오기 */
  useEffect(() => {
    axios.get(`/api/item/${item_id}`).then((data) => {
      setProduct(data.data);
    })
  }, [])

  /* Object로 전달 받은 배열 Array type으로 바꾸기 */
  //사이즈
  let [sizeArr, setSizeArr] = useState({});
  useEffect(() => {
    if (product.size && (product.size).length > 0) {
      setSizeArr(product.size);
    }
  }, [setSizeArr, product.size]);

  //색상
  let [colorArr, setColorArr] = useState({});
  useEffect(() => {
    if (product.color && (product.color).length > 0) {
      setColorArr(product.color);
    }
  }, [setColorArr, product.color]);

  /* select 박스 */
  const [Selected, setSelected] = useState("");
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

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
              <span className="title align-self-center">{product.name}</span>
              <Star margintop="8px"/>
            </div>
            <span className="price">{convertPrice(+product.price)}원</span>
            <p className="desc">{product.description}</p>

            <p className="desc-color">색상을 선택해주세요.</p>
            <span className="color-name">옥색</span><br />

            <select onChange={handleSelect} value={Selected}>
              {Object.values(sizeArr).map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select><br/>

            <button className="rent">대여신청하기</button>
            <button className="cart">장바구니</button>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
}