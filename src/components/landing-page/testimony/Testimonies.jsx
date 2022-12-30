import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PreparationStyles from "./Testimonies.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {BsHandThumbsUp} from "react-icons/bs";
const Testimonies = () =>{
 useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  
  return (
    <>
    <Container fluid className={PreparationStyles.TestimonyContainer} 
    data-aos="fade-left"
     data-aos-easing="linear"
     data-aos-duration="1500">
    <h1 className="text-center text-light">
    User Feedback
    </h1>
  <Row>
    <Card className={PreparationStyles.testimonyenvelope}>
    <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/50.jpg" className={PreparationStyles.cardimg}/>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2 text-dark">Product Manager</Card.Title>
      <Card.Text className="text-center p-2 text-dark">It help me understand the role of a product manager</Card.Text>
      <button className="btn"><BsHandThumbsUp classNamw="h1"></BsHandThumbsUp></button>
      </Card.Body>
    </Card>

   <Card className={PreparationStyles.testimonyenvelope}>
       <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/39.jpg" className={PreparationStyles.cardimg}/>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2 text-dark">Backend Developer</Card.Title>
      <Card.Text className="text-center p-2 text-dark">The challenge gave me a tough time and help me learn how to research</Card.Text>
       <button className="btn"><BsHandThumbsUp classNamw="h1"></BsHandThumbsUp></button>
      </Card.Body>
    </Card>

   <Card className={PreparationStyles.testimonyenvelope}>
       <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/10.jpg" className={PreparationStyles.cardimg}/>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2 text-dark">Mobile Developer</Card.Title>
      <Card.Text className="text-center p-2 text-dark">switch stack to mobile developer because of the amazing  react Native challenge</Card.Text>
       <button className="btn"><BsHandThumbsUp classNamw="h1"></BsHandThumbsUp></button>
      </Card.Body>
    </Card>

      <Card  className={PreparationStyles.testimonyenvelope}>
       <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/19.jpg" className={PreparationStyles.cardimg}/>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2 text-dark">Frontend Developer</Card.Title>
      <Card.Text className="text-center p-2 text-dark">I love this app would recommend it anytime</Card.Text>
       <button className="btn"><BsHandThumbsUp classNamw="h1"></BsHandThumbsUp></button>
      </Card.Body>
    </Card>
    
    </Row>
    </Container>
    </>
    )
}

export default Testimonies