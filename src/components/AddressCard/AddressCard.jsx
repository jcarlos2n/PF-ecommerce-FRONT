import './AddressCard.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const AddressCard = props => {
    const dataUser = useSelector(userData)
    const navigate = useNavigate();

    const deleteAddress = async (req, res) => {
        try {
            const config = {
                headers: { "Authorization": `Bearer ${dataUser.token}` }
            }
            const add = await axios.delete(`http://localhost:8000/api/user/address/delete/${props.data.id}`, config)
                .then(res => {
                    console.log(res)
                    navigate('/')
                }).catch(err => {
                    console.log(err)
                })
        } catch (error) {

        }
    }

    const [update, setUp] = useState({
        details: false,
        data: ''
    });

    const [data, setData] = useState({
        city: props.data.city,
        country: props.data.country,
        postal_code: props.data.postal_code,
        state: props.data.state,
        street: props.data.street
    })

    const showUp = () => {
        setUp({
            ...update,
            details: true,

        })
    }

    const hideUp = () => {
        setUp({
            ...update,
            details: false,
        })
        setData({
            city: props.data.city,
            country: props.data.country,
            postal_code: props.data.postal_code,
            state: props.data.state,
            street: props.data.street
        })
    }

    const handleInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const addressUpdate = (e) => async (req, res) => {
        
        try {
            
            const config = {
                headers: { "Authorization": `Bearer ${dataUser.token}` }
            }
            const add = await axios.put(`http://localhost:8000/api/user/address/update/${props.data.id}`, {
                street: data.street,
                city: data.city,
                state: data.state,
                postal_code: data.postal_code,
                country: data.country
            }, config).then(res => {
                
              console.log('Direccion Actualizada')
                setTimeout(() => {
                        navigate('/')
                }, 1000);
            }).catch(err => {
                console.log(err)
            })
        } catch (error) {
            
        }
    }

    if (update.details == false) {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Ciudad:</Card.Title>
                    <Card.Text>{props.data.city}</Card.Text>
                    <Card.Title>Pais:</Card.Title>
                    <Card.Text>{props.data.country}</Card.Text>
                    <Card.Title>Codigo Postal:</Card.Title>
                    <Card.Text>{props.data.postal_code}</Card.Text>
                    <Card.Title>Comunidad Autonoma:</Card.Title>
                    <Card.Text>{props.data.state}</Card.Text>
                    <Card.Title>Calle:</Card.Title>
                    <Card.Text>{props.data.street}</Card.Text>
                    <Button variant="primary" onClick={showUp}>Actualizar</Button>
                    <Button variant="primary" onClick={deleteAddress}>Eliminar</Button>
                </Card.Body>
            </Card>
        )
    } else {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Ciudad:</Card.Title>
                    <Form.Control onChange={handleInput} type="text" name="city" placeholder={props.data.city} />
                    <Card.Title>Pais:</Card.Title>
                    <Form.Control onChange={handleInput} type="text" name="country" placeholder={props.data.country} />
                    <Card.Title>Codigo Postal:</Card.Title>
                    <Form.Control onChange={handleInput} type="number" name="postal_code" placeholder={props.data.postal_code} />
                    <Card.Title>Comunidad Autonoma:</Card.Title>
                    <Form.Control onChange={handleInput} type="text" name="state" placeholder={props.data.state} />
                    <Card.Title>Calle:</Card.Title>
                    <Form.Control onChange={handleInput} type="text" name="street" placeholder={props.data.street} />
                    <Button variant="primary" onClick={addressUpdate()}>Actualizar</Button>
                    <Button variant="primary" onClick={hideUp}>Cancelar</Button>
                </Card.Body>
            </Card>
        )
    }

}

export default AddressCard