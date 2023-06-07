import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Item(props) {
  return (
    <h1>Item {props.category}</h1>
  );
}