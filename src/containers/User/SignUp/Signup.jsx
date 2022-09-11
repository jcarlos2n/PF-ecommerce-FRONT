
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signUpUser, userData } from "../userSlice";
import "./Signup.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Signup = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector(userData);

    const [signup, setSignup] = useState({
        email: '',
        password: '',
        name: '',
        last_name: '',
        phone: '',
        isError: false,
        message: ''
    });

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/signup')
        }
    }, []);

    const handleInput = (event) => {
        setSignup({
            ...signup,
            [event.target.name]: event.target.value
        })
    };

    const userSignup = (event) => {
        event.preventDefault()
        console.log('entro');


        setSignup({
            ...signup,
            isError: false,
            errorMessage: ''
        });

        dispatch(signUpUser(signup.email, signup.password, signup.name, signup.last_name, signup.phone));

        setTimeout(() => {
            navigate('/')
        }, 1500)
    }

    return (
        <div className="signupWall">
            <Form onSubmit={userSignup}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleInput} type="text" placeholder="Name" name="name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control onChange={handleInput} type="text" placeholder="Last name" name="last_name" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone</Form.Label>
                    <Form.Control onChange={handleInput} type="text" placeholder="Phone" name="phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleInput} type="email" placeholder="Email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleInput} type="password" placeholder="Password" name="password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Signup