
import frontend from "./../../assets/3426526.jpg";
import backend from "./../../assets/Bitmap (1).png";
import mobile from "./../../assets/9813.jpg";
import designer from "./../../assets/Illustrations (1).png";
import product from "./../../assets/3785210.jpg";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Styles from "./Dashbaord.module.scss";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
 const DashboardContent = () =>{
   useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return(
    <Container>
     <Row className={Styles.testimonytool} 
     data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
     <Col className="col-md mb-5 testimonyenvelope">
    <Card style={{width:"18rem", color:"black"}} className={Styles.testimonyenvelope}>
    <Card.Img src={frontend} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Frontend challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/frontend" className="btn mb-5">Check Frontend Challenge</Link>
    </Card>
    </Col>
    
     <Col className="col-md mb-5 testimonyenvelope">
    <Card style={{width:"18rem", color:"black"}} className={Styles.testimonyenvelope}>
    <Card.Img src={backend} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Backend challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Button variant="dark" className="mb-5"><Link to="/backend" className="link">COMING SOON</Link></Button>
    </Card>
    </Col>
    
     <Col className="col-md mb-5 testimonyenvelope">
    <Card style={{width:"18rem", color:"black"}} className={Styles.testimonyenvelope}>
    <Card.Img src={mobile} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Mobile challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
       <Button variant="dark" className="mb-5"><Link to="/mobile" className="link">COMING SOON</Link></Button>
    </Card>
    </Col>
    
      <Col className="col-md mb-5 testimonyenvelope">
    <Card style={{width:"18rem", color:"black"}} className={Styles.testimonyenvelope}>
    <Card.Img src= {designer} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Designer challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/designer" className="btn mb-5">Check Designer Challenge</Link>
    </Card>
    </Col>
    
      <Col className="col-md mb-5 testimonyenvelope">
    <Card style={{width:"18rem", color:"black"}} className={Styles.testimonyenvelope}>
    <Card.Img src= {product} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>P.M challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
     <Button variant="dark" classNam e="mb-5"><Link to="/product" className="link">COMING SOON</Link></Button>
    </Card>
    </Col>
    
    
     
     </Row>
    </Container>
    
    )
}

export default DashboardContent
