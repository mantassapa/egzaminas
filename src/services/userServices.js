import axios from "axios"
import { useState } from "react";


export const loginUser = (email, password, setData, setError, setShowReg) => {
    axios
        .post(`http://localhost:3001/api/users/login`, {
            email,
            password,
        })
        .then((res)=>{
            localStorage.setItem("userData", JSON.stringify({token:res.data.token, username:res.data.username, _id:res.data._id})),
            setData(res.data)
            setError('')
            setShowReg(0)
            }
        )

        .catch((err)=>(console.error(err),setError(err)))
}
export const registerUser = (username, email, password, setData, setError, setShowReg) => {
    axios
        .post(`http://localhost:3001/api/users`, {
            username,
            email,
            password,
        })
        .then((res)=>{
            localStorage.setItem("userData", JSON.stringify({token:res.data.token, username:res.data.username, _id:res.data._id}));
            setData(res.data)
            setError('')
            setShowReg(0)
            }
        )
        .catch((err)=>(console.error(err),setError(err)))
}
export const getUser = (userId, userToken, setData)=>{
    axios
    .get(`http://localhost:3001/api/users/${userId}`, {
    headers:{
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
    }
    })
    .then((res)=>setData(res.data))
    .catch((err)=>console.error(err))
}
export const getAllUser = (userToken, setData)=>{
    axios
    .get(`http://localhost:3001/api/users`, {
    headers:{
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
    }
    })
    .then((res)=>setData(res.data))
    .catch((err)=>console.error(err))
}
export const deleteUser = (userId, userToken, setData)=>{
    axios
    .delete(`http://localhost:3001/api/users/${userId}`, {
    headers:{
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
    }
    })
    .then((res)=>getAllUser(userToken, setData))
    .catch((err)=>console.error(err))
}
export const getUserLikes = (userId, userToken, setData)=>{
    axios
    .get(`http://localhost:3001/api/users/${userId}/likes`, {
    headers:{
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
    }
    })
    .then((res)=>setData(res.data))
    .catch((err)=>console.error(err))
}
