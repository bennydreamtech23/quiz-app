import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PreparationStyles from "./Testimonies.module.scss";


const Testimonies = () =>{
  return (
    <>
    <Container fluid className={PreparationStyles.TestimonyContainer}>
    <Row className={PreparationStyles.content}>
    <Col className="text-white">
    <h1>
    User
    </h1>
    <p>
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis.
    </p>
    </Col>
    
     <Col className={PreparationStyles.testimonyBox}>
    <Card className={PreparationStyles.testimonyCard}>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2">Product Manager</Card.Title>
      </Card.Body>
    </Card>
  
   <Card className={PreparationStyles.testimonyCard1}>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2">Bckend Developer</Card.Title>
      </Card.Body>
    </Card>
    
     <Card 
   className={PreparationStyles.testimonyCard2}>
      <Card.Body  className={PreparationStyles.CardContent}>
       <Card.Title className="text-center p-2">Mobile Developer</Card.Title>
      </Card.Body>
    </Card>
    
       <Card 
    className={PreparationStyles.testimonyCard3}>
      <Card.Body  className={PreparationStyles.CardContent}>
      <Card.Title className="text-center p-2">Frontend Developer</Card.Title>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
    )
}

export default Testimonies