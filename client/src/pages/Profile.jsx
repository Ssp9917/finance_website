import React, { useContext, useEffect, useState } from 'react'
import FirstStep from '../components/process/FirstStep'
import axios from '../config/axiosConfig'
import {UserAuthContext} from '../context/UserAuthProvider'

const Profile = () => {

  const [applyCardUser,setApplyCardUser] = useState([])

  const {user} = useContext(UserAuthContext);
  // console.log(user._id)

  // console.log(user)
  
  const getApplyCardUser = () => {
    axios.get(`/apply-user/getAllUser/${user?._id}`).then(
      (response)=>{
        console.log(response)
      }
    ).catch((err)=>{
      console.log(err)
    })
  }


  useEffect(
    ()=>{
      getApplyCardUser()
    },[user]
  )

  return (
    <FirstStep/>
  )
}

export default Profile