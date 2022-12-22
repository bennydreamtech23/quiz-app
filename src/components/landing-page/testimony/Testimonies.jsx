import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PreparationStyles from "./Testimonies.module.scss";
//import Button from 'react-bootstrap/Button';
import {BsHandThumbsUp} from "react-icons/bs";
const Testimonies = () =>{
  return (
    <>
    <Container fluid className={PreparationStyles.TestimonyContainer}>
    <h1 className="text-center">
    User Feedback
    </h1>
  <Row  className={PreparationStyles.testimonytool}>
    <Col className="col-md testimonyenvelope">
    <Card style={{width:"18rem", height:"23rem"}} className={PreparationStyles.testimonyenvelope}>
    <Card.Img variant="top" src="https://randomuser.me/api/portraits/men/50.jpg" className={PreparationStyles.cardimg}/>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2 text-dark">Product Manager</Card.Title>
      <Card.Text className="text-center p-2 text-dark">It help me understand the role of a product manager</Card.Text>
      <button className="btn"><BsHandThumbsUp classNamw="h1"></BsHandThumbsUp></button>
      </Card.Body>
    </Card>
  </Col>
  <Col className="col-md testimonyenvelope">
   <Card style={{width:"18rem", height:"23rem"}} className={PreparationStyles.testimonyenvelope}>
       <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/39.jpg" className={PreparationStyles.cardimg}/>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2 text-dark">Backend Developer</Card.Title>
      <Card.Text className="text-center p-2 text-dark">The challenge gave me a tough time and help me learn how to research</Card.Text>
       <button className="btn"><BsHandThumbsUp classNamw="h1"></BsHandThumbsUp></button>
      </Card.Body>
    </Card>
    </Col>

    <Col className="col-md testimonyenvelope">
   <Card style={{width:"18rem", height:"23rem"}} className={PreparationStyles.testimonyenvelope}>
       <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/39.jpg" className={PreparationStyles.cardimg}/>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2 text-dark">Mobile Developer</Card.Title>
      <Card.Text className="text-center p-2 text-dark">switch stack to mobile developer because of the amazing  react Native challenge</Card.Text>
       <button className="btn"><BsHandThumbsUp classNamw="h1"></BsHandThumbsUp></button>
      </Card.Body>
    </Card>
    </Col>
    
    <Col className="col-md testimonyenvelope">
      <Card style={{width:"18rem", height:"23rem"}} className={PreparationStyles.testimonyenvelope}>
       <Card.Img variant="top" src="https://randomuser.me/api/portraits/women/39.jpg" className={PreparationStyles.cardimg}/>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2 text-dark">Frontend Developer</Card.Title>
      <Card.Text className="text-center p-2 text-dark">I love this app would recommend it anytime</Card.Text>
       <button className="btn"><BsHandThumbsUp classNamw="h1"></BsHandThumbsUp></button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
    )
}

export default Testimonies