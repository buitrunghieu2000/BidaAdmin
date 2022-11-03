import { createSlice } from '@reduxjs/toolkit'
export interface authState {
    isAuth: boolean
}

const initialState: authState = {
    isAuth: false
}
export const authSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers:{
        updateAuthStatus:(state,action)=>{
            state.isAuth = action.payload
            
        }
    }
});

export const {updateAuthStatus} = authSlice.actions;
export default authSlice.reducer