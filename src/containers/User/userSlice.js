import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        token: '',
        data: []
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        logout: (state, action) => {
           return{
            ...state.initialState
           }
        },
        signup: (state, action) =>{
            return{
                ...state,
                isRegister:true,
                succesMessage: 'You have been signed succesfully'
            }
        },
        profile: (state, action) => {
            return{
                ...state,
                ...action.payload
            }
        },
        logError: (state, action) => {
            return {
                ...state,
                isError: !action.payload.success,
                errorMessage: action.payload.message
            }
        }
    }
});

export const loginUser = (body) => async (dispatch) => {
    try {
        const user = await axios.post("http://localhost:8000/api/login", body);
        var decode = jwt(user.data.token);

        if (user.status === 200) {
            dispatch(login({
                ...decode, 
                token: user.data.token
            }))
        }

    } catch (error) {
        console.log(error)
    }
};
export const signUpUser = (email, password, name, last_name, phone) => async (dispatch) => {
    try {
        const user =await axios.post("http://localhost:8000/api/register",
        {
            name: name,
            last_name: last_name,
            password: password,
            phone: phone,
            email: email
        });
    } catch (error) {
        dispatch(logError(error));
    }
}

export const profileUser = (token) => async (dispatch) => {
    const config = {
        headers: {"Authorization": `Bearer ${token}`}
    }
    try {
        const user =await axios.get("http://localhost:8000/api/profile",config)
        dispatch(profile({
            ...user.data
        }))
    } catch (error) {
        dispatch(logError(error));
    }
}
export const logOutUser = (body) => async (dispatch) => {
    try {
        const user = await axios.post("http://localhost:8000/api/logout", body);
    } catch (error) {
        dispatch(logError(error));
    }
}

export const {login ,logout, signup, profile, logError} = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;