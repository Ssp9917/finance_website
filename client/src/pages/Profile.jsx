import React, { useContext, useEffect, useState } from 'react'
import FirstStep from '../components/process/FirstStep'
import axios from '../config/axiosConfig'
import {UserAuthContext} from '../context/UserAuthProvider'

const Profile = () => {

  const {user,applyCardUser} = useContext(UserAuthContext);


  return (
    <FirstStep />
  )
}

export default Profile