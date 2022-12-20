
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture6 from "../../../assets/Rectangle 3.png";
import picture1 from "../../../assets/Bitmap (1).png";
import picture2 from "../../../assets/Bitmap (2).png";
import picture3 from "../../../assets/Bitmap.png";
import PreparationStyles from "./Preparation.module.scss";
import Button from 'react-bootstrap/Button';

const Preparation = () =>{
  return(
    <>
  <Container fluid className={PreparationStyles.PreparationContainer}>
    <div className={PreparationStyles.rowproduct}>
    <h1 className={PreparationStyles.headerTitle}>Let's Sharp Your Preparation</h1>
<Button className={PreparationStyles.PreparationBtn} variant="black">
GET STARTED
</Button>
</div>

<Row xs={1} md={3} sm={2} className={PreparationStyles.box}>
    <Col>
    <Card 
    className={PreparationStyles.darkgreen}
    style={{ width: '18rem' , height: "17rem"}}>
      <Card.Body>
      <Card.Img src={picture1} alt="picture1" className={PreparationStyles.orangeImg}/>
      <Card.Title className="text-center p-2">Product Manager</Card.Title>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card 
    className={PreparationStyles.orange}
    style={{ width: '18rem' , height: "17rem"}}>
      <Card.Body>
      <Card.Img src={picture6} alt="picture2" className={PreparationStyles.orangeImg}/>
      <Card.Title className="text-center p-2">Product Designer</Card.Title>
      </Card.Body>
    </Card>
    </Col>
    
    <Col>
    <Card 
    className={PreparationStyles.darkgreen}
    style={{ width: '18rem' , height: "17rem"}}>
      <Card.Body>
      <Card.Img src={picture2} alt="picture1" className={PreparationStyles.orangeImg}/>
      <Card.Title className="text-center p-2">Backend Developer</Card.Title>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card 
    className={PreparationStyles.orange}
    style={{ width: '18rem' , height: "17rem"}}>
      <Card.Body>
      <Card.Img src={picture3} alt="picture1" className={PreparationStyles.orangeImg}/>
      <Card.Title className="text-center p-2">Frontend Developer</Card.Title>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card 
    className={PreparationStyles.orange}
    style={{ width: '18rem' , height: "17rem"}}>
      <Card.Body>
      <Card.Img src={picture3} alt="picture1" className={PreparationStyles.orangeImg}/>
      <Card.Title className="text-center p-2">Mobile Developer</Card.Title>
      </Card.Body>
    </Card>
    </Col>

    </Row>
</Container>
    </>
    )
}
export default Preparation