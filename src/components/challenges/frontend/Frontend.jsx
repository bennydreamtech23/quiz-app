import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FrontendChallenge from "../../challenge/frontendchallenge";
import Style from './Frontend.module.scss';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logout} from "../../core/login/firebase";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Frontend = () =>{
 const [data, setData] = useState(FrontendChallenge)
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/dashboard");
  }, [user, loading]);


   const filterResult = (catItem) =>{
    const result = FrontendChallenge.filter((curDate) =>{
      return curDate.level === catItem;
    });
    setData(result)
  }
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  
  return(
<Container
 data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="1500">
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
       <div>
    <Card.Title className={Style.title}>{name}</Card.Title>
    <button className={Style.button}>
    {language}
    </button>
    </div>
  <p
    className="text-center p-3">
    {description}
    </p>
<div className={Style.cardbody}>
     <a href={figmaLink} className={Style.cardlink} target="_blank" rel="noreferrer">
             figmaLink
            </a>
    <a href={designSource} className={Style.cardlink} target="_blank" rel="noreferrer">
             Design Source
            </a>
  </div>
  
  <div className='mt-3 mb-5'>
    <a href={solutionLink} className={Style.cardlinks} target="_blank" rel="noreferrer">
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