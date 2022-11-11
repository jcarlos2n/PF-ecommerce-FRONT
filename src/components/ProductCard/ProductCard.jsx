
import React from 'react';
import './ProductCard.scss';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { userData } from "../../containers/User/userSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const ProductCard = props => {
  const dataUser = useSelector(userData);

  if (!dataUser?.token) {
    return (
      <Card className='card'>
          
        <Card.Img className='cardImg' variant="top" src={props.data.image} />
        <Card.Body>
        <Card.Title>{props.data.variety}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush info">
          <ListGroup.Item>{props.data.description}</ListGroup.Item>
          <ListGroup.Item>Precio: {props.data.price}€/Kg</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link as={Link} to="/login" >Login</Card.Link>
          <Card.Link as={Link} to="/signup">Sign Up</Card.Link>
        </Card.Body>
      </Card>
    );
  }else {
    return (
      <Card className='card'>
          
        <Card.Img className='cardImg' variant="top" src={props.data.image} />
        <Card.Body>
        <Card.Title>{props.data.variety}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.data.description}</ListGroup.Item>
          <ListGroup.Item>Precio: {props.data.price}€/Kg</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <div>
            <label>Kg:</label>
            <input type="text"   name='cuantity' />
          </div>
          <Card.Link href="#">Order</Card.Link>
        </Card.Body>
      </Card>
    );
  }
  
}

export default ProductCard;