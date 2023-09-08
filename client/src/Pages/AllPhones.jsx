import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;

function AllPhones() {
    const [phones, setPhones] = useState([]);
    const navigate = useNavigate();

//    async function fetchPhones(){
//     try {
//         const response = await axios.get(`${API_URL}/phones`)
//         setPhones(response.data)
//         navigate(`/phones/${phones._id}`)
//     } catch (error) {
//         next(error)
//     }
//    }
useEffect(()=>{
    axios
        .get(`${API_URL}/api/phones`)
        .then((response)=>{
            setPhones(response.data)
        })
        .catch((error)=>{
            console.log("Error fething data:", error)
        })  
        
},[])

if(!phones){
    return <div>Loading...</div>
}

  return (
    <div className='allPhones'>
        <h1>Our catalog</h1>
        {phones.map((phone)=>{
            <ul>
                <li key={phone._id}>
                <Link to={`/phones/${phone._id}`}>
                    <img className='phone-pic' src={phone.imageFileName} alt={phone.name}/>
                </Link>
                </li>
                
            </ul>
        })}

    </div>
  )
}

export default AllPhones