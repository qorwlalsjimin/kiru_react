import { Navbar, Nav, Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/common/Product.css';

export default function Product({ item_id }) {
  return (
    <div className='product'>
      <a href='#'>
        <div className="profile_wrapper">
          <img className="main" src="https://i.postimg.cc/pdWgDHtN/image.png" alt="item image" />
          {/* <img className="wish" src="/images/wish_empty.png" /> */}
        </div>
        <p>단하</p>
        <span>분홍 대슘 원피스</span><br />
        <span>19,200원</span>
      </a>
    </div>
  );
}