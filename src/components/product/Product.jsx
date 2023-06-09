import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/common/Product.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Product({ product, convertPrice }) {
  return (
    <div className='product'>
      <Link to={`/item/${product.itemId}`}>
        <div className="profile_wrapper">
          <img className="main" src={product.imageUrl[0]} alt="item image" />
          {/* <img className="wish" src="/images/wish_empty.png" /> */}
        </div>
        <p>{(product.category.title).split('.')[1]}</p>
        <span>{product.name}</span><br />
        <span>{convertPrice(product.price)}원</span>
      </Link>
    </div>
  );
}