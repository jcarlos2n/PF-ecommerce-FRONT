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
import UpdateAddressCard from "../../../components/UpdateAddressCard/UpdateAddressCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import UpdateAddress from "../../UpdateAddress/UpdateAddress";



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
                            setAddress(resp.data.data);

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
        console.log(dataAdd)
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

    // const [addUp, setAdd] = useState({
    //     details: false,
    //     data: ''
    // });

    // const showAddress = (event, add) => {
    //     setAdd({
    //         ...addUp,
    //         details: true,
    //         data: pokemon
    //     })
    // }

    // const hideAddress = (event) => {
    //     setAdd({
    //         ...addUp,
    //         details: false,
    //         data: ""
    //     })
    // }

    // const UpdateAddress = () => {
    //     if (dataAdd !== "") {
    //         return (
    //             <div className='detailedAdd'>
    //                 <div ><p onClick={hideAddress} className='close'>X</p></div>
    //                 <UpdateAddressCard data={dataAdd} />
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div></div>
    //         )
    //     }
    // }

    return (
        <div className="profileWall">
            <button type="submit" onClick={getOut}>Log Out</button>
            <button type="submit" onClick={address}>add address</button>
            {/* <UpdateAddress /> */}
            <AddressList />
        </div>
    )
}

export default Profile