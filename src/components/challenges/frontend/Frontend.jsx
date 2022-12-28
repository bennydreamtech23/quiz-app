import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FrontendChallenge from "../../challenge/frontendchallenge";
import Style from './Frontend.module.scss';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout} from "../../core/login/firebase";
import { useEffect, useState } from "react";

const Frontend = () =>{
 const [data, setData] = useState(FrontendChallenge)
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);


   const filterResult = (catItem) =>{
    const result = FrontendChallenge.filter((curDate) =>{
      return curDate.level === catItem;
    });
    setData(result)
  }
  
  return(
<Container>
<header className={Style.containerFrontend}>
<button 
className="btn headerRow"
onClick= {() => filterResult("Advanced")}>
Advanced
</button>

<button 
className="btn headerRow"
onClick= {() => filterResult("Intermediate")}>
Intermediate
</button>

<button 
className="btn headerRow"
onClick= {() => filterResult("Beginner")}>
Beginner
</button>

<button 
className="btn headerRow"
onClick= {logout}>
logout
</button>
</header>


<section className={Style.containerFrontend}>
{data.map((values) =>{
const {id, image, name, language, description, figmaLink, designSource,   solutionLink} = values
  return(
      <Card key={id} className={Style.card}>
    <Card.Img variant="top" src={image} alt="houseflag" className={Style.cardimage}></Card.Img>
       <div className={Style.cardbody}>
    <Card.Title className={Style.title}>{name}</Card.Title>
    <button className={Style.button}>
    {language}
    </button>
    </div>
  <p
    className="text">
    {description}
    </p>
<div className={Style.cardbody}>
     <a href={figmaLink} className={Style.cardlink} target="_blank">
             figmaLink
            </a>
    <a href={designSource} className={Style.cardlink} target="_blank">
             Design Source
            </a>
  </div>
  
  <div className='mb-5'>
    <a href={solutionLink} className={Style.cardlinks} target="_blank">
             Solution Link
            </a>
  </div>
    </Card>
  )
})}
    </section>
</Container>
    )
}

export default Frontend 