import React, { useEffect } from 'react';
import "./Demo.css";
import { useSelector } from 'react-redux';
import { addUser,updateUser,deleteuser,GetData } from '../features/Users';
import {useDispatch} from "react-redux";
import { useState } from 'react';

const Demo = () => {

  const UserList = useSelector((state)=>state.userInfo.value)

  const dispatch = useDispatch();

  const [indentity,setIdentity] = useState("")
  const [profilename,setProfilename] = useState("")
  const [updateUsername,setUpdateUsername] = useState("")

  useEffect(()=>{
   dispatch(GetData())
  },[dispatch])

  const Addinguser = (()=>{
    return(
      dispatch(addUser({id:Math.random(), name:indentity, username:profilename }))
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
       {UserList.map(({username,id,name})=>{
    return(
      <div key={id}>
        <h2>{name}</h2>
        <h3>{username}</h3>
        <input type="text" placeholder='Update username'
        onChange={(e)=>{setUpdateUsername(e.target.value)}}/>
        <button 
        onClick={()=>{
          dispatch(updateUser({id:id, username:updateUsername}))}}>
            Update Username</button>
          <button onClick={()=>{dispatch(deleteuser({id:id}))}}>Delete user</button>
     </div>
    )
  })}
    </div>
  )
}

export default Demo;