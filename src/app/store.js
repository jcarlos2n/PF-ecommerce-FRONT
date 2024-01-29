import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../containers/User/userSlice'
// import addressSlice from '../components/AddressCard/AddressSlice'

export default configureStore({
    reducer: {
        user: userSlice,
        // address: addressSlice
    }
})