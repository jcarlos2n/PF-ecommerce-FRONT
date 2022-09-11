import React, { useEffect, useState } from "react";
import "./Login.scss"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userData } from "../userSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = props => {

    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [msgError, setMsgError] = useState("");

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const loginData = useSelector(userData);

    const updateCredentials = (event) => {
        setCredentials({
            ...credentials, [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if (loginData?.token !== '') {
            navigate('/login')
        }
    }, []);

    const logIn = (event) => {
        event.preventDefault()
        console.log('entro')
        if (credentials.password.length < 6) {
            setMsgError("Password must have more than 6 characters");
            
            return;
        }
        setMsgError('');
        dispatch(loginUser({
            email: credentials.email,
            password: credentials.password
        }));

        setTimeout(() => {
            navigate('/')
        }, 1000)
    };

    return (
        <div className="loginWall">

            {/* <label className="labelLogin">Email</label>
            <input className="inputLogin" type="email" name="email" onChange={updateCredentials} />

            <label className="labelLogin">Password</label>
            <input className="inputLogin" type="password" name="password" onChange={updateCredentials} />

            <input className="submitLogin" type="submit" value="Log in" onClick={() => logIn()} />

            <div className="errorMessage">
                {msgError}
            </div> */}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control  type="email" name="email" onChange={updateCredentials}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" name="password" onChange={updateCredentials}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={logIn}>
                    Submit
                </Button>
                
                <div className="errorMessage">
                    {msgError}
                </div>
            </Form>
        </div>
    )
}

export default Login