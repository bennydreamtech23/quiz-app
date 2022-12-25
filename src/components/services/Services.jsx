
import servicesStyle from "./Services.module.scss"
//import imghero from "../../../assets/heroimage.png";
import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

import TimelineData from "./Timeline/TimelineData"
import TimelineCard from "./Timeline/TimelineCard"

const Services = () =>{
  return(
    <Container fluid>
    <h1 className={servicesStyle.headerTitle}>WHY CHOOSE ULTIMATIUM ARENA</h1>
   <div className={servicesStyle.Timeline}>
         <div className={servicesStyle.timelinecontainer}>
               {TimelineData.map((serviceData)=>{
                 return (
                  <TimelineCard
                     Monthprophecy={serviceData}
                  />
               );})}
          </div>
    </div>
  
    </Container>
    )
}

export default Services