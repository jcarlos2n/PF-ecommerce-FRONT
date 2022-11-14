
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signUpUser, userData } from "../userSlice";
import "./Signup.scss";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import evalField from "../../../utils";


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

        if (signup.name == '' || signup.last_name == '' || signup.email == '' || signup.address == '' || signup.phone == '') {
            setSignup({
                ...signup,
                isError: true,
                errorMessage: 'Rellene todos los campos'
            });
            return
        }

        if (!evalField('name',signup.name)) {
            setSignup({
                ...signup,
                isError: true,
                errorMessage: 'Inserte un nombre válido'
            });
            return
        }

        if (!evalField('name',signup.name)) {
            setSignup({
                ...signup,
                isError: true,
                errorMessage: 'Inserte un apellido válido'
            });
            return
        }

        if (signup.password.length >= 8) {
            if (!evalField('password', signup.password)) {
                setSignup({
                    ...signup,
                    isError: true,
                    errorMessage: 'Itroduce una contraseña valida'
                });
                return
            }
        }else{
            setSignup({
                ...signup,
                isError: true,
                errorMessage: 'La contraseña debe tener al menos 8 caracteres'
            });
            return
        }

        if (!evalField('phone', signup.phone)) {
                setSignup({
                    ...signup,
                    isError: true,
                    errorMessage: 'Inserte un numero de tlfn valido'
                });
                return
        }

        if (!evalField('address', signup.address)) {
            setSignup({
                ...signup,
                isError: true,
                message: 'Introduce a valid address'
            });
            return;
        }

        if (!evalField('email', signup.email)) {
            setSignup({
                ...signup,
                isError: true,
                message: 'Reenter a valid email'
            });
            return;
        }


        setSignup({
            ...signup,
            isError: true,
            errorMessage: 'Has sido registrado correctamente, inicie sesión para iniciar su compra'
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
            <p>{signup.errorMessage}</p>
        </div>
    )
}

export default Signup