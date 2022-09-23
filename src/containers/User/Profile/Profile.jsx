import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout, logOutUser, userData, profileUser, profile } from "../userSlice";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Profile.scss';



const Profile = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const dataUser = useSelector(userData);
    const [dataAdd, setAddress] = useState([]);

    useEffect(() => {
        if (!dataUser?.token) {
            navigate('/');
        } else {
            dispatch(profileUser(dataUser.token))

            async function fetchAddress() {
                try {
                    const config = {
                        headers: { "Authorization": `Bearer ${dataUser.token}` }
                    }
                    await axios.get('http://localhost:8000/api/user/address/get', config)
                        .then(resp => {
                            setAddress(resp.data);
                        })
                } catch (error) {
                    console.log(error)
                }


            }
            fetchAddress();
        }

    }, [])
    const getOut = () => {

        dispatch(logout());
        dispatch(logOutUser({
            token: dataUser.token
        }));

        setTimeout(() => {
            navigate('/')
        }, 800)
    }

    const address = () => {
        navigate('/address')
    }

    const AddressList = () => {
        if (dataAdd.length > 0) {
            return (
                <Container fluid>
                    <Row>
                        <Col>1 of 1</Col>
                    </Row>
                </Container>
            )
        }
    }

    return (
        <div className="profileWall">
            <button type="submit" onClick={getOut}>Log Out</button>
            <button type="submit" onClick={address}>add address</button>
        </div>
    )
}

export default Profile