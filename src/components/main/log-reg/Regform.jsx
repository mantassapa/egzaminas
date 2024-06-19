import React, { useState } from 'react'
import axios from "axios"
import { registerUser } from '../../../services/userServices'

const Regform = ({setShowReg, setUser}) => {
  const [error, setError] = useState("")
  const [regValue, setRegValue] = useState({
    name:"",
    email:"",
    pass:"",
    pass2:"",
  })

  const handleChange=(el)=>{
      const {name,value} = el.target
      setRegValue((prev)=>({
        ...prev,
        [name]:value
      }))
  }

  const register = (ev) => {
    ev.preventDefault()
    if(regValue.pass===regValue.pass2){
      setError("")
      registerUser(regValue.name, regValue.email, regValue.pass, setUser, setError, setShowReg)
    }else{setError("Passwords don't match")}
  }

  return (
    <form onSubmit={register}>
      <h3 style={{color:"red"}}>{error}</h3>
      <h2 >Register</h2>
        <label htmlFor="reg_name">Name: </label>
        <input type="text" value={regValue.name} name='name' onChange={handleChange} required/>
        <label htmlFor="reg_email">Email: </label>
        <input type="email" value={regValue.email} name='email' onChange={handleChange} required/>
        <label htmlFor="reg_pass_one">Passwrod: </label>
        <input type="password" value={regValue.pass} name='pass' onChange={handleChange} required/>
        <label htmlFor="reg_pass_2">Repeat password: </label>
        <input type="password" value={regValue.pass2} name='pass2' onChange={handleChange} required/>
        <button type='submit'>Register</button>
    </form>
  )
}

export default Regform