import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Address.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { profileUser, userData } from "../../containers/User/userSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Address = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const dataUser = useSelector(userData)

    useEffect(() => {
        dispatch(profileUser(dataUser.token))
    }, [dataUser.token])

    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        user_id: dataUser.id
    });

    

    const addAddress = (street, city, state, postal_code, country, user_id) => async (dispatch) => {
        try {
            const address = await axios.post('http://localhost:8000/api/user/address/add',
                {
                    street: street,
                    city: city,
                    state: state,
                    postal_code: postal_code,
                    country: country,
                    user_id: user_id
                })
                dispatch(address(data))
        } catch (error) {
            dispatch(logError(error));
        }
    }

    const handleInput = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }

    const addressAdd = () => {
       console.log('entro');

       setAddress({
        ...address
       })

       dispatch(addAddress(address.street, address.city, address.state, address.postal_code, address.country, address.user_id))

       setTimeout(() => {
        navigate('/home')
       },1000)

    }

    return (
        <Form onSubmit={addressAdd}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Street</Form.Label>
                <Form.Control onChange={handleInput} type="text" placeholder="Street" name="street"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={handleInput} type="text" placeholder="City" name="city"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={handleInput} type="text" placeholder="State" name="state"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control onChange={handleInput} type="text" placeholder="Postal Code" name="postal_code"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Country</Form.Label>
                <Form.Control onChange={handleInput} type="text" placeholder="Country" name="country"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}

export default Address



