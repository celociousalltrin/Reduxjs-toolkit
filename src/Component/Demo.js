import React from 'react';
import "./Demo.css";
import { useSelector } from 'react-redux';
import { addUser,updateUser,deleteuser } from '../features/Users';
import {useDispatch} from "react-redux";
import { useState } from 'react';

const Demo = () => {

  const UserList = useSelector((state)=>state.userInfo.value)

  const dispatch = useDispatch();

  const [indentity,setIdentity] = useState("")
  const [profilename,setProfilename] = useState("")
  const [updateUsername,setUpdateUsername] = useState("")

  const Addinguser = (()=>{
    return(
      dispatch(addUser({id:UserList[UserList.length-1].id+1, name:indentity, username:profilename }))
    )
  })
  return (
    <div className='Demo'>
      <div className='adduser'>

      <input type="text" placeholder='Name...' 
      onChange={(e)=>{setIdentity(e.target.value)}}/>

      <input type="text" placeholder='Username...' 
      onChange={(e)=>{setProfilename(e.target.value)}}/>
      
      <button onClick={Addinguser}> Add user</button>
      </div>
  {UserList.map((item)=>{
    return(
      <div key={item.id}>
        <h2>{item.name}</h2>
        <h3>{item.username}</h3>
        <input type="text" placeholder='Update username'
        onChange={(e)=>{setUpdateUsername(e.target.value)}}/>
        <button 
        onClick={()=>{
          dispatch(updateUser({id:item.id, username:updateUsername}))}}>
            Update Username</button>
          <button onClick={()=>{dispatch(deleteuser({id:item.id}))}}>Delete user</button>
     </div>
    )
  })}
    </div>
  )
}

export default Demo;