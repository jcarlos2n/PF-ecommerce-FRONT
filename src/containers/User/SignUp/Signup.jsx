
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signUpUser, userData } from "../userSlice";
import "./Signup.scss";


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
    },[]);

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

        setTimeout(() =>{
            navigate('/')
        }, 1500)
    }

    return (
        <div className="signupWall">
            <form onSubmit={userSignup}>
                <div className="signupItem">
                    <label>Name</label>
                    <input onChange={handleInput} type="text"  name='name' />
                    <label>Last name</label>
                    <input onChange={handleInput} type="text"  name='last_name' />
                    <label>Phone</label>
                    <input onChange={handleInput} type="text"  name='phone' />
                    <label>email</label>
                    <input onChange={handleInput} type="text"  name='email' />
                    <label>Password</label>
                    <input onChange={handleInput} type="password"  name='password' />

                    <button className="submitSignupItem" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup