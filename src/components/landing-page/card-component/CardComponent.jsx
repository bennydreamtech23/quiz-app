
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture6 from "../../../assets/Illustrations.png";
import picture1 from "../../../assets/Illustrations (1).png";
import picture2 from "../../../assets/8401.jpg";
import picture3 from "../../../assets/13038.jpg";
import picture4 from "../../../assets/4428861.jpg";
import picture5 from "../../../assets/9813.jpg";
import cardStyles from "./CardComponent.module.scss";



const CardComponent =()=>{
  return(
    <>
    <Container fluid className={cardStyles.CardComponentContainer}>
    <h1 className={cardStyles.title}>How To Play</h1>
    <Row>
    <Col className="col-md">
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture1} style={{ width: '18rem', height:"18rem"}} />
      <Card.Body>
        <Card.Title>Step 1</Card.Title>
        <Card.Text>
          Visit the Website
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    <Col className="col-md">
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture2} style={{ width: '18rem', height:"18rem"}}/>
      <Card.Body>
        <Card.Title>Step 2</Card.Title>
        <Card.Text>
          Sigin up if you are new or already a player Login
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    <Col className="col-md">
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture3} style={{ width: '18rem', height:"18rem"}}/>
      <Card.Body>
        <Card.Title>Step 3</Card.Title>
        <Card.Text>
        Welcome to the ULTIMATUM ARENA
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    
    <Row>
    <Col className="col-md">
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture4} style={{ width: '18rem', height:"18rem"}} />
      <Card.Body>
        <Card.Title>Step 4</Card.Title>
        <Card.Text>
          Click your STACK
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
        <Col className="col-md">
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture5} style={{ width: '18rem', height:"18rem"}}/>
      <Card.Body>
        <Card.Title>Step 5</Card.Title>
        <Card.Text>
          Challenges related to that Stack will POPUP
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
        <Col className="col-md">
    <Card style={{ width: '18rem' , height: "25rem"}} className={cardStyles.card}>
      <Card.Img variant="top" src={picture6} style={{ width: '18rem', height:"18rem"}} />
      <Card.Body>
        <Card.Title>Step 6</Card.Title>
        <Card.Text>
          Challenge yourself based on your level
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