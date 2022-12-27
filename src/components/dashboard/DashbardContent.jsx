import imghero from "./../../assets/heroimage.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Styles from "./Dashbaord.module.scss";
import { Link } from "react-router-dom";
 const DashboardContent = () =>{
  return(
    <Container>
    <Row>
    <Col className="col-md mb-5">
    <Card style={{width:"18rem", color:"black"}}>
    <Card.Img src={imghero} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Frontend challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/" className="btn mb-5">Check Frontend Challenge</Link>
    </Card>
    </Col>
    
      <Col className="col-md mb-5">
    <Card style={{width:"18rem", color:"black"}}>
    <Card.Img src={imghero} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Backend challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/" className="btn mb-5">Check Frontend Challenge</Link>
    </Card>
    </Col>
      
      <Col className="col-md mb-5">
    <Card style={{width:"18rem", color:"black"}}>
    <Card.Img src={imghero} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Mobile challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/" className="btn mb-5">Check Frontend Challenge</Link>
    </Card>
    </Col>
    
      <Col className="col-md mb-5">
    <Card style={{width:"18rem", color:"black"}}>
    <Card.Img src={imghero} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Product Manager challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/" className="btn mb-5">Check Frontend Challenge</Link>
    </Card>
    </Col>
    
      <Col className="col-md mb-5">
    <Card style={{width:"18rem", color:"black"}}>
    <Card.Img src={imghero} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Designer challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/" className="btn mb-5">Check Frontend Challenge</Link>
    </Card>
    </Col>
  
    </Row>
    </Container>
    
    )
}

export default DashboardContent