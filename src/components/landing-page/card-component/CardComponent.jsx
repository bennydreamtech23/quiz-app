
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture6 from "../../../assets/Illustrations.png";
import picture1 from "../../../assets/Illustrations (1).png";
import picture2 from "../../../assets/Rectangle 3.png";
import picture3 from "../../../assets/reminder2.png";
import cardStyles from "./CardComponent.module.scss";



const CardComponent =()=>{
  return(
    <>
    <Container fluid className={cardStyles.CardComponentContainer}>
    <Row xs={1} md={2} sm={3} className={cardStyles.box}>
    <Col className={cardStyles.card}>
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture1} style={{ width: '18rem', height:"18rem"}} />
      <Card.Body>
        <Card.Title>Step 1</Card.Title>
        <Card.Text>
          Enter the Phone Number and Click Register
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    <Col className={cardStyles.card}>
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture2} style={{ width: '18rem', height:"18rem"}}/>
      <Card.Body>
        <Card.Title>Step 2</Card.Title>
        <Card.Text>
          Enter the Vertification Code and click  verify
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    <Col className={cardStyles.card}>
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture3} style={{ width: '18rem', height:"18rem"}}/>
      <Card.Body>
        <Card.Title>Step 3</Card.Title>
        <Card.Text>
          Enter the Info and Click Play Quiz
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    <Col className={cardStyles.card}>
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture1} style={{ width: '18rem', height:"18rem"}} />
      <Card.Body>
        <Card.Title>Step 4</Card.Title>
        <Card.Text>
          Click the subject
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
        <Col className={cardStyles.card}>
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture2} style={{ width: '18rem', height:"18rem"}}/>
      <Card.Body>
        <Card.Title>Step 5</Card.Title>
        <Card.Text>
          A question will have four options
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
        <Col className={cardStyles.card}>
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture6} style={{ width: '18rem', height:"18rem"}} />
      <Card.Body>
        <Card.Title>Step 6</Card.Title>
        <Card.Text>
          Click right Option
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
    )
}
export default CardComponent