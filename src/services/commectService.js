import axios from "axios"
import { useState } from "react";

import axios from "axios";
import { getAds } from "../ads/adsServices";


export const createComment = (data, userToken, setData) => {
    axios
        .post(`http://localhost:3001/api/comments`, data, {
            headers:{
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json',
            }
        })
        .then((res)=>getAds(setData))
        .catch((err)=>console.error(err))
}

export const deleteComment = (userToken, comId, setData)=>{
    axios
    .delete(`http://localhost:3001/api/comments/${comId}`,  {
    headers:{
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
    }
    })
    .then((res)=>getAds(setData))
    .catch((err)=>console.error(err))
}