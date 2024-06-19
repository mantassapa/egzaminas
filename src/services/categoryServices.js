import axios from "axios";


export const getCategories = (setData) => {
    axios
        .get(`http://localhost:3001/api/categories`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.error(err))
}

export const createCategory = (category, userToken, setData, setError)=>{
    axios
        .post("http://localhost:3001/api/categories", {name: category},{
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'application/json',
        }})
        .then((res)=>(
            getCategories(setData)
        ))
        .catch((err)=>(console.log(err),setError(err.response.data.message)))
}
export const removeCategory = (id, userToken, setData, setError)=>{
    axios
        .delete(`http://localhost:3001/api/categories/${id}`,{
            headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        }})
        .then((res)=>(
            getCategories(setData)

        ))
        .catch((err)=>(console.log(err),setError(err.response.data.message))) 
}