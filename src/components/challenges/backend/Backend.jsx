
import Container from 'react-bootstrap/Container';
import Style from './Backend.module.scss';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout} from "../../core/login/firebase";
import { useEffect} from "react";

const Backend = () =>{
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/dashboard");
  }, [user, loading]);

  return(
<Container fluid className="p-5">
     
<header className={Style.backend}>
<div className="headerRow">
 <h1  className={Style.headerTitle}>COMING SOON!!!!</h1>
 <p className="headerRow text-center" style={{margin: "2rem"}}> WE WOULD KEEP YOU UPDATED</p>
 <button 
className="btn headerRow"
onClick= {logout}>
logout
</button>
</div>
</header>
</Container>
    )
}

export default Backend