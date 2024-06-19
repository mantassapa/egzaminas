import axios from "axios";
import React, { useState } from "react";


export const getAds = (setData) => {
  axios
    .get(`http://localhost:3001/api/ads`)
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => console.error(err));
};

export const getUserServices = (setData, userToken) => {
  axios
    .get(`http://localhost:3001/api/ads/user`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => console.error(err));
};

export const createService = (data, userToken, setData) => {
  axios
    .post(`http://localhost:3001/api/ads`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => getAds(setData))
    .catch((err) => console.error(err));
};

export const updateService = (data, adId, userToken, setData) => {
  axios
    .put(`http://localhost:3001/api/ads/${adId}`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => getAds(setData))
    .catch((err) => console.error(err));
};

export const deleteService = (adId, userToken, setData) => {
  axios
    .delete(`http://localhost:3001/api/ads/${adId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => getAds(setData))
    .catch((err) => console.error(err));
};