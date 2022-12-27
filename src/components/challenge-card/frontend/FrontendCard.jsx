
import frontend from "../../challenge/frontendchallenge"
//import {FaHeart, FaStar, FaSlidersH} from 'react-icons/fa';
import {useState} from "react";


const FrontendCard = () =>{
  const [data, setData] = useState(frontend)
  
  return(
<>

    <section>
{data.map((values) =>{
const {id, image, name, language, description, figmaLink, designSource} = values
  return(
      <article key={id}>
    <div>
    <img 
    src={image} alt="houseflag"/>
    </div>
    <div>
    <div>
    <h3>
    {name}
    </h3>
    <p>
    {language}
    </p>
    
  <p>
    className="text">
    {description}
    </p>
    </div>
    <div>
    <h3
    style={{fontWeight:"700"}}>
    {figmaLink}
    </h3>
    <p> 
    {designSource}
    </p>
    </div>
    </div>
    </article>
  )
})}

    </section>
</>
    )
}

export default FrontendCard