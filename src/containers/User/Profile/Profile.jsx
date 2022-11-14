import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout, logOutUser, userData, profileUser } from "../userSlice";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Profile.scss';
import AddressCard from "../../../components/AddressCard/AddressCard";
import UsersCard from "../../../components/UsersCard/UsersCard";
import Button from 'react-bootstrap/Button';


const Profile = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const dataUser = useSelector(userData);
    const [dataAdd, setAddress] = useState([]);
    const [role, setRole] = useState([]);
    const [users, setUsers] = useState([]);



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
                            setAddress(resp.data.data);

                        })
                } catch (error) {
                    console.log(error)
                }


            }

            async function fetchRole() {
                try {
                    const config = {
                        headers: { "Authorization": `Bearer ${dataUser.token}` }
                    }
                    await axios.get('http://localhost:8000/api/user/getrole', config)
                        .then(resp => {
                            setRole(resp.data.data);
                        })
                } catch (error) {
                    console.log(error)
                }
            }

            async function fetchUsers() {
                try {
                    const config = {
                        headers: { "Authorization": `Bearer ${dataUser.token}` }
                    }
                    await axios.get('http://localhost:8000/api/user/getusers', config)
                        .then(resp => {
                            setUsers(resp.data.data)
                        })
                } catch (error) {
                    console.log(error);
                }
            }

            fetchAddress();
            fetchRole();
            fetchUsers();
        }

    }, []);

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

    const UserList = () => {

        if (users.length > 0) {
            return (
                <Container fluid>
                    <Row>

                        {
                            users.map((add, index) => (
                                <UsersCard key={index} data={add} />
                            ))
                        }

                    </Row>
                </Container>
            )
        } else {
            return (
                <Container fluid>
                    <Row>
                        <Col>No hay direcciones</Col>
                    </Row>
                </Container>
            )

        }
    }

    const AddressList = () => {

        if (dataAdd.length > 0) {
            return (
                <Container fluid>
                    <Row>

                        {
                            dataAdd.map((add, index) => (
                                <AddressCard key={index} data={add} />
                            ))
                        }

                    </Row>
                </Container>
            )
        } else {
            return (
                <Container fluid>
                    <Row>
                        <Col>No hay direcciones</Col>
                    </Row>
                </Container>
            )

        }
    }

    if (role == '') {
        return (
            <div className="profileWall">
                <div className="buttons">
                    <Button className="button" variant="secondary" type="submit" onClick={getOut}>Log Out</Button>{' '}
                    <Button className="button" variant="secondary" type="submit" onClick={address}>Add Address</Button>{' '}
                </div>

                <AddressList />
            </div>
        )
    } else if (role[0].role_id == 3) {

        return (
            <div className="profileWall">
                <h1>Eres admin</h1>
                <div className="buttons">
                    <Button className="button" variant="secondary" type="submit" onClick={getOut}>Log Out</Button>{' '}
                    <Button className="button" variant="secondary" type="submit" onClick={address}>Add Address</Button>{' '}
                </div>


                <AddressList />

                <h1>Usuarios</h1>

                <UserList />
            </div>
        )
    }
}

export default Profile