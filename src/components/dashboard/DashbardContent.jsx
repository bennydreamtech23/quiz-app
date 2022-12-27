
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
 const DashboardContent = () =>{
  return(
    <Container>
     <Row className={Styles.testimonytool}>
     <Col className="col-md mb-5 testimonyenvelope">
    <Card style={{width:"18rem", color:"black"}} className={Styles.testimonyenvelope}>
    <Card.Img src={frontend} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Frontend challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/frontendcard" className="btn mb-5">Check Frontend Challenge</Link>
    </Card>
    </Col>
    
     <Col className="col-md mb-5 testimonyenvelope">
    <Card style={{width:"18rem", color:"black"}} className={Styles.testimonyenvelope}>
    <Card.Img src={backend} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Backend challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Button variant="dark" className="mb-5">COMING SOON</Button>
    </Card>
    </Col>
    
     <Col className="col-md mb-5 testimonyenvelope">
    <Card style={{width:"18rem", color:"black"}} className={Styles.testimonyenvelope}>
    <Card.Img src={mobile} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Mobile challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Button variant="dark" className="mb-5">COMING SOON</Button>
    </Card>
    </Col>
    
      <Col className="col-md mb-5 testimonyenvelope">
    <Card style={{width:"18rem", color:"black"}} className={Styles.testimonyenvelope}>
    <Card.Img src= {designer} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>Designer challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Link to="/" className="btn mb-5">Check Designer Challenge</Link>
    </Card>
    </Col>
    
      <Col className="col-md mb-5 testimonyenvelope">
    <Card style={{width:"18rem", color:"black"}} className={Styles.testimonyenvelope}>
    <Card.Img src= {product} style={{width:"18rem"}} alt=""></Card.Img>
    <Card.Title className={Styles.dashboardTitle}>P.M challenge</Card.Title>
    <Card.Text className={Styles.dashboardText}>This challenges is based on your level of experience and has advanced challenges to improve your skill level.</Card.Text>
    <Button variant="dark" className="mb-5">COMING SOON</Button>
    </Card>
    </Col>
    
    
     
     </Row>
    </Container>
    
    )
}

export default DashboardContent
