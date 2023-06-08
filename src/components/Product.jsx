import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common/Product.css';
import { useState } from 'react';

export default function Product({ product }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className='product'>
      <a href='#' 
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}>
        <div className="profile_wrapper">
          <img className="main" src={isHover ? product.imageUrl[1] : product.imageUrl[0]} alt="item image" />
          {/* <img className="wish" src="/images/wish_empty.png" /> */}
        </div>
        <p>{(product.category.title).split('.')[1]}</p>
        <span>{product.name}</span><br />
        <span>{product.price}원</span>
      </a>
    </div>
  );
}