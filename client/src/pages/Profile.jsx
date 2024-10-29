import React, { useContext, useEffect } from "react";
import FirstStep from "../components/process/FirstStep";
import axios from "../config/axiosConfig";
import { UserAuthContext } from "../context/UserAuthProvider";
import User_details from "../components/User_details";
import SecondStep from "../components/process/SecondStep";

import InsuranceStep from "../components/process/InsuranceStep";
import FinalStep from "../components/process/FinalStep";

const Profile = () => {
  const { user, applyCardUser, getApplyCardUser } = useContext(UserAuthContext);

  useEffect(() => {
    getApplyCardUser();
  }, []);

  if (!applyCardUser) {
    // Render user details if no card application data is available
    return <User_details />;
  }

  const { process } = applyCardUser;

  if (process[0].status !== "active") {
    // If the first step is not active, render FirstStep
    return <FirstStep />;
  } else if (process[1].status !== "active") {
    // If the second step is not active, render InsuranceStep
    return <InsuranceStep />;
  } else if (process[2].status !== "active") {
    // If the third step is deactive, render SecondStep
    return <SecondStep />;
  } else {
    // Default case, render FirstStep as fallback
    return <FinalStep />;
  }
};

export default Profile;
