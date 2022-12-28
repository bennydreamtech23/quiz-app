import Container from 'react-bootstrap/Container';
import Style from './Mobile.module.scss';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout} from "../../core/login/firebase";
import { useEffect} from "react";

const Mobile = () =>{
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/dashboard");
  }, [user, loading]);

  return(
<Container>
<header className={Style.backend}>
 <h1  className="headerRow text-center">COMING SOON!!!!</h1>
 <p className="headerRow text-center" style={{margin: "2rem"}}> WE WOULD KEEP YOU UPDATED</p>
 <button 
className="btn headerRow"
onClick= {logout}>
logout
</button>
</header>
</Container>
    )
}

export default Mobile