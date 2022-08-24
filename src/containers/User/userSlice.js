import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        token: ''
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
        let decode = jwt(user.data.token);

        if (user.status === 200) {
            dispatch(login({
                ...decode, 
                token: user.data.token
            }))
        }

    } catch (error) {
        console.log(error)
    }
}

export const {login ,logout, logError} = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;