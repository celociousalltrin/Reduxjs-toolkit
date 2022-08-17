import {createSlice} from "@reduxjs/toolkit";
import { UsersData } from "../mockdata/mock";

export const userSlice = createSlice({
    name:"users",
    initialState:{value:UsersData},

    reducers:{
        addUser:(state,action) =>{
            state.value.push(action.payload)
        },
        updateUser:(state,action)=>{
         state.value.map((item)=>{
            if(item.id === action.payload.id) {
            item.username = action.payload.username
            }
         })
        },
        deleteuser:(state,action)=>{
         state.value = state.value.filter((item)=>item.id !== action.payload.id
         )
        },
    }
})

export const {addUser,updateUser, deleteuser} = userSlice.actions;
export default userSlice.reducer;