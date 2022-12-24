
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import dashboardStyles from "./Dashbaord.module.scss";
import { auth, logout} from "./../core/login/firebase";
//import { query, collection, getDocs, where } from "firebase/firestore";

function Dashbaord() {
  const [user, loading] = useAuthState(auth);
 // const [name, setName] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);

  return (
    <div className={dashboardStyles.dashboard}>
      <div className={dashboardStyles.dashboard__container}>
        <button className={dashboardStyles.dashboard__btn} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashbaord;
