import './AddressCard.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { userData } from '../../containers/User/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router';

const AddressCard = props => {
    const dataUser = useSelector(userData)
    const navigate = useNavigate();
    // console.log(dataUser)
    const deleteAddress = async (req, res) => {
        try {
            const config = {
                headers: { "Authorization": `Bearer ${dataUser.token}` }
            }
            const add = await axios.delete(`http://localhost:8000/api/user/address/delete/${props.data.id}`,config)
            .then(res => {
                console.log(res)
                navigate('/')
            }).catch(err => {
                console.log(err)
            })
        } catch (error) {

        }
    }

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
                <Button variant="primary" onClick={() => navigate('/updateaddress')} params={{props}}>Actualizar</Button>
                <Button variant="primary" onClick={deleteAddress}>Eliminar</Button>
            </Card.Body>
        </Card>
    )
}

export default AddressCard