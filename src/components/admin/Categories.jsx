import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { createCategory, removeCategory } from '../../services/categoryServices'

const Categories = ({user,categories, getCategories, setCategories}) => {
    const [filters, setFilters] = useState([])
    const [category, setCategory] = useState("")
    const [error, setError] = useState("")

    const addCategory =(e)=>{
        e.preventDefault()
        createCategory(category, user.token, setCategories, setError)
        setCategory(""),
        setError("")

    }
    const handleCatChange = (el) => {
        setCategory(el.target.value)
    }
    const deleteCategory = (id)=>{
        removeCategory(id, user.token, setCategories, setError)
        setCategory(""),
        setError("")
        }

  return (
    <div className='categories_edit'>
        <ul>
            {categories?.map((el)=><li key={el._id}>
            <h4>{el.name} <span><button onClick={()=>deleteCategory(el._id)}>X</button></span></h4> 
            
            </li>)}
        </ul>
        <form onSubmit={addCategory}>
            <h4 style={{color:"red"}}>{error}</h4>
            <input type="text" value={category} onChange={handleCatChange} placeholder='Add new Category' required/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Categories