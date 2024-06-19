import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UpdateAd from './UpdateAd';
import Ad from './Ad';

const Ads = ({
    setRefreshAds,
     categories, 
     filterSelectValue,
     filterInputValue,
     adsShowOrder,
     ads,
     setAds,
     showMyFavorites,
     showMyAds,}) => {
  const user = JSON.parse(localStorage.getItem("userData"))
  const [adU, setAdU] = useState([])
  const [showUpdate, setShowUpdate] = useState(0)

  const [filteredAds, setFilteredAds] = useState([]);
  const [likedAds, setLikedAds] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [adToEdit, setAdToEdit] = useState(null);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [adToComment, setAdToComment] = useState(null);
  const userData = JSON.parse(localStorage.getItem('userData')) || {};


  const handleDelete =(adId)=>{
    axios
      .delete(`http://localhost:3001/api/ads/${adId}`,{    
        headers: { 
            Authorization: `Bearer ${user.token}`,
            'Content-Type': 'application/json',
        }}        
      )
      .then((res)=>setRefreshAds([]))
      .catch((err)=>console.log(err))
  }

  useEffect(() => {
    const filterAndSort = () => {
      let adsCopy = [...ads];

      if (showMyFavorites) {
        adsCopy = adsCopy.filter((ad) =>
          ad.likes.some((user) => user === userData._id)
        );
      }

      if (showMyAds) {
        adsCopy = adsCopy.filter((ad) => ad.user._id === userData._id);
      }

      if (adsShowOrder === 'low') {
        adsCopy.sort((a, b) => a.price - b.price);
      } else if (adsShowOrder === 'high') {
        adsCopy.sort((a, b) => b.price - a.price);
      }

      return adsCopy.filter((ad) => {
        const matchesCategory =
          filterSelectValue === 'all' || ad.category.name === filterSelectValue;
        const matchesInput =
          ad.name.toLowerCase().includes(filterInputValue.toLowerCase()) ||
          ad.description.toLowerCase().includes(filterInputValue.toLowerCase());
        return matchesCategory && matchesInput;
      });
    };

    setFilteredAds(filterAndSort());
  }, [
    ads,
    filterSelectValue,
    filterInputValue,
    adsShowOrder,
    showMyAds,
  ]);



  return (
    <div className='allads'>
      {showUpdate===1?<UpdateAd adU={adU} user={user} setShowUpdate={setShowUpdate} setRefreshAds={setRefreshAds} categories={categories}/>:null}
      {filteredAds.map((ad)=><Ad key={ad._id} ad={ad} user={user} setRefreshAds={setRefreshAds} setAdU={setAdU} setShowUpdate={setShowUpdate}/>)}
    </div>
  )
}

export default Ads