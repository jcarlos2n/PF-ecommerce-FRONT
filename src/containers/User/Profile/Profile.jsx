import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { logout, logOutUser, userData, profileUser } from "../userSlice";



const Profile = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const dataUser = useSelector(userData);
   
    useEffect(() => {
        console.log(dataUser.token)
        dispatch(profileUser(dataUser.token))
    },[])
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

    return(
        <div className="profileWall">
            <button type="submit" onClick={getOut}>Log Out</button>
            <button type="submit" onClick={address}>add address</button>
        </div>
    )
}

export default Profile