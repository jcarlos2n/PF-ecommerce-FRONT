
import './UsersCard.scss';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const UsersCard = props => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: props.data.name,
        last_name: props.data.last_name,
        phone: props.data.phone,
        email: props.data.email,
    })

    return (
        <Card className='userCard' style={{ width: '18rem' }}>
            <Card.Body className='bodyCard'>
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