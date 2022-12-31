
import frontend from "./../../assets/3426526.jpg";
import backend from "./../../assets/Bitmap (1).png";
import mobile from "./../../assets/9813.jpg";
import designer from "./../../assets/Illustrations (1).png";
import product from "./../../assets/3785210.jpg";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
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
    <Container fluild className={Styles.DashboardComponentContainer}>
    <Row 
    data-aos="zoom-out-up"
     data-aos-easing="ease-out-cubic"
     data-aos-delay="300"
     data-aos-duration="1500">

      <Card className={Styles.card}>
    <Card.Img variant="top" src={frontend} alt='img1' className={Styles.img}></Card.Img>
        <div className={Styles.content}>
    <Card.Title className={Styles.dashboardTitle}>Frontend challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/frontend" className="btn mb-5">Check Frontend Challenge</Link>
 </div>
 </Card>
 
    <Card className={Styles.card}>
   <Card.Img variant="top" src={backend} alt='img1' className={Styles.img}></Card.Img>
        <div class={Styles.content}>
  <Card.Title className={Styles.dashboardTitle}>Backend challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Button variant="dark" className="mb-5"><Link to="/backend" className="link">COMING SOON</Link></Button>
 </div>
  </Card>

       <Card className={Styles.card}>
    <Card.Img variant="top" src={designer} alt='img1' className={Styles.img}></Card.Img>
        <div class={Styles.content}>
   <Card.Title className={Styles.dashboardTitle}>Mobile challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
       <Button variant="dark" className="mb-5"><Link to="/mobile" className="link">COMING SOON</Link></Button>
 </div>
   </Card>

<Card className={Styles.card}>
<Card.Img variant="top" src={mobile} alt='img1' className={Styles.img}></Card.Img>
        <div class={Styles.content}>
    <Card.Title className={Styles.dashboardTitle}>Designer challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/designer" className="btn mb-5">Check Designer Challenge</Link>
 </div>
 </Card>
 
    <Card className={Styles.card}>
     <Card.Img src={product} alt='img1' className={Styles.img}></Card.Img>   
        <div class={Styles.content}>
<Card.Title className={Styles.dashboardTitle}>P.M challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
     <Button variant="dark" classNam e="mb-5"><Link to="/product" className="link">COMING SOON</Link></Button>
 </div>
 </Card>
 </Row>
  </Container>
    )
}

export default DashboardContent
