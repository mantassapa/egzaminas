import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import axios from 'axios';
import Categories from './components/admin/Categories';
import AllUsers from './components/admin/AllUsers';
import { getCategories } from './services/categoryServices';


function App() {
  const [showReg, setShowReg] = useState(0)
  const [showFilters, setShowFilters] = useState("")
  const [user, setUser] = useState(localStorage.getItem("userData")===null?"none":JSON.parse(localStorage.getItem("userData")))
  const [categories, setCategories] = useState([])
  const [allUsers, setAllUsers] = useState([])


  
  
  useEffect(()=>{
    getCategories(setCategories)
    if(user!="none"){setShowReg(0)}
  },[])
  
  return (
    <div className="App"> 
      <Header 
        showReg={showReg}
        user={user}
        setUser={setUser}
        setShowReg={setShowReg}
        setShowFilters={setShowFilters}
        showFilters={showFilters}
      />
      <hr />

      {showFilters===1?<Categories 
        user={user} 
        categories={categories}
        getCategories={getCategories}
        setCategories={setCategories}
      />:null}
      {showFilters===2?<AllUsers
        user={user} 
      />:null}
      <Main 
        showReg={showReg}
        setShowReg={setShowReg}
        setUser={setUser}
        categories={categories}
      />
      
    </div>
  );
}

export default App;