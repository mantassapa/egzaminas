import React, { useEffect, useState } from 'react'
import Regform from './log-reg/Regform'
import Logform from './log-reg/Logform'
import axios from 'axios'
import Ads from './ads/Ads'
import CreateAd from './ads/CreateAd'
import { getAds } from '../../services/adServices'
import Filter from './Filter'

const Main = ({showReg, setShowReg, setUser, categories}) => {

    const [ads, setAds] = useState([])
    const [refreshAds, setRefreshAds] = useState([])

    const [filterSelectValue, setfilterSelectValue] = useState('all');
    const [filterInputValue, setfilterInputValue] = useState('');
    const [adsShowOrder, setAdsShowOrder] = useState('default');
    const [showMyAds, setShowMyAds] = useState(false);
    const [showMyFavorites, setShowMyFavorites] = useState(false);
    const [userRole, setUserRole] = useState(
      localStorage.getItem('userData')
        ? JSON.parse(localStorage.getItem('userData')).role
        : 'none'
    );
  

    useEffect(()=>{
      getAds(setAds)
    },[refreshAds])

  return (
    <main>
        {showReg===1?<Regform setShowReg={setShowReg} setUser={setUser}/>:null}
        {showReg===2?<Logform setShowReg={setShowReg} setUser={setUser}/>:null}
        <Filter
          filterInputValue={filterInputValue}
          setfilterInputValue={setfilterInputValue}
          setfilterSelectValue={setfilterSelectValue}
          setAdsShowOrder={setAdsShowOrder}
      />
        <CreateAd categories={categories} setAds={setAds}/>
        <Ads 
          ads={ads}
          setRefreshAds={setRefreshAds}
          setAds={setAds}
          filterSelectValue={filterSelectValue}
          filterInputValue={filterInputValue}
          adsShowOrder={adsShowOrder}
          showMyAds={showMyAds}
          showMyFavorites={showMyFavorites}
          />

    </main>
  )
}

export default Main