

import dashboardStyles from "./Dashbaord.module.scss";
import Sidebar from "./Sidebar";

function Dashbaord() {
 
  return (
    <div className={dashboardStyles.dashboard}>
  
<Sidebar/>
    </div>
  );
}

export default Dashbaord;
