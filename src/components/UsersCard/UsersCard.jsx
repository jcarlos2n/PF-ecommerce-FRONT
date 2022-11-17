

import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import './UsersCard.scss';

const UsersCard = props => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: props.data.name,
        last_name: props.data.last_name,
        phone: props.data.phone,
        email: props.data.email,
    })

    return (
        <Card style={{ width: '18rem' }} className='userCard'>
            <Card.Body>
                <Card.Title>Nombre:</Card.Title>
                <Card.Text>{props.data.name}</Card.Text>
                <Card.Title>Apellido:</Card.Title>
                <Card.Text>{props.data.last_name}</Card.Text>
                <Card.Title>Telefono:</Card.Title>
                <Card.Text>{props.data.phone}</Card.Text>
                <Card.Title>Email:</Card.Title>
                <Card.Text>{props.data.email}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UsersCard