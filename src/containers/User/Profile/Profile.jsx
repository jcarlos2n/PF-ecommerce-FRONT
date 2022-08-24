import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router";
import { logout } from "../userSlice";



const Profile = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const getOut = () => {
        dispatch(logout());
        

        setTimeout(() => {
            navigate('/')
        }, 800)
    }

    return(
        <div className="profileWall">
            <input type="submit" onClick={getOut} />
        </div>
    )
}

export default Profile