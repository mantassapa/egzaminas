import axios from "axios";
import { getAds } from "../ads/adsServices";


export const createLike = (data, userToken, setData) => {
    axios
        .post(`http://localhost:3001/api/likes`, data, {
            headers:{
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json',
            }
        })
        .then((res)=>getAds(setData))
        .catch((err)=>console.error(err))
}

export const updateLike = (data, userToken, likeId, setData)=>{
    axios
    .put(`http://localhost:3001/api/likes/${likeId}`, data, {
    headers:{
        Authorization: `Bearer ${userToken}`,
        'Content-Type': 'application/json',
    }
    })
    .then((res)=>getAds(setData))
    .catch((err)=>console.error(err))
}