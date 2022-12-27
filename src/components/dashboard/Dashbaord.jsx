

import dashboardStyles from "./Dashbaord.module.scss";
import Sidebar from "./Sidebar";
import  {useState} from "react"
function Dashbaord() {
 const [currentTheme, setCurrentTheme] = useState("light")
 const changeTheme = () =>{
    currentTheme=== "dark" ? setCurrentTheme("light") : setCurrentTheme("dark")
  }
  return (
    <div className={dashboardStyles.dashboard} data-theme={currentTheme}>
  
<Sidebar currentTheme={currentTheme} changeTheme={changeTheme}/>
    </div>
  );
}

export default Dashbaord;
