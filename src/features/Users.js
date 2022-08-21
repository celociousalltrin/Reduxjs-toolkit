import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import { UsersData } from "../mockdata/mock";
import axios from "axios"

export const GetData = createAsyncThunk("users/GetData",async()=>{
      return axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>res.data)
      .catch((err)=>console.log(err))
})
export const userSlice = createSlice({
    name:"users",
    initialState:{value:[]},

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
    },
   extraReducers:{
    [GetData.pending]: ()=>{
        console.log("pending")
    },
    [GetData.fulfilled]:(state,action)=>{
        return{...state,value:action.payload}
    },
    [GetData.rejected]: ()=>{
        console.log("rejected")
    },
   }
})

export const {addUser,updateUser, deleteuser} = userSlice.actions;
export default userSlice.reducer;