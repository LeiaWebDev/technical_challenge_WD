import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;

function OnePhone() {
    const {_id} = useParams()
    const [onePhone, setOnePhone] = useState(null)

useEffect(()=>{
    axios
        .get(`${API_URL}/api/phones/${_id}`)
        .then((response)=>{
            setOnePhone(response.data)
        })
        .catch((error)=>{
            console.log("Error fetching a phone details:", error)
        })  
        
},[_id])

if(!onePhone){
    return <div>Loading...</div>
}

  return (
    <div>

    </div>
  )
}

export default OnePhone