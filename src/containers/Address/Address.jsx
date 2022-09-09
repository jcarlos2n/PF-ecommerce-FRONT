import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Address.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../containers/User/userSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Address = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const dataUser = useSelector(userData)

    const [user, setUser] = useState();

    useEffect(() => {
        const config = {
            headers: { "Authorization": `Bearer ${dataUser.token}` }

        }
        async function fetchUser() {
            await axios.get("http://localhost:8000/api/profile", config)
                .then(resp => {
                    setUser(resp.data);
                }).catch(error => { });

        }
        fetchUser();

    }, [dataUser.token])

    const addAddress = (street, city, state, postal_code, country) => async (dispatch) => {
        try {
            const address = await axios.post('http://localhost:8000/api/user/address/add',
                {
                    street: street,
                    city: city,
                    state: state,
                    postal_code: postal_code,
                    country: country,
                    user_id: user.id
                }
            )
        } catch (error) {

        }
    }

    const handleInput = (e) => {
        
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" placeholder="Street" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text" placeholder="Postal Code" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )

}

export default Address



