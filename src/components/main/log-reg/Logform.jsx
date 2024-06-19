import axios from 'axios'
import React, { useState } from 'react'
import { loginUser } from '../../../services/userServices'

const Logform = ({setShowReg, setUser}) => {
  const [error, setError] = useState("")
  const [regValue, setRegValue] = useState({
    name:"",
    email:"",
    pass:"",
  })
  const handleChange=(el)=>{
    const {name,value} = el.target
    setRegValue((prev)=>({
      ...prev,
      [name]:value
    }))
  }
  const login = (ev) => {
    ev.preventDefault()
    loginUser(regValue.email, regValue.pass, setUser, setError, setShowReg)
  }

  return (
    <form onSubmit={login}>
      <h3 style={{color:"red"}}>{error}</h3>
      <h2 >Login</h2>
      <label htmlFor="reg_email">Email: </label>
      <input type="email" value={regValue.email} name='email' onChange={handleChange} required/>
      <label htmlFor="reg_pass_one">Passwrod: </label>
      <input type="password" value={regValue.pass} name='pass' onChange={handleChange} required/>
      <button type='submit'>Login</button>
    </form>
  )
}

export default Logform