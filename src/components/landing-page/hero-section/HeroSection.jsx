import img from "../../../assets/herosectionImg.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const HeroSection = () =>{
  return(
<header>
<Container fluid className="p-5">
<Row className="justify-content-md-center">
<Col>
<h1>
play Online Challenge & win Cash Daily!
</h1>

<p>
Win up to 1000$ monthly from QuizBaj
</p>

<input type="number"/>
<button>
REGISTER NOW
</button>
<div>
<h1> OF ACTIVE USERS RIGHT  </h1>
<h3>20,000+</h3>
</div>
</Col>
<Col>
<Card.Img src={img} alt="HeroSectionimg"/>
</Col>
</Row>
</Container>
</header>
    )
}
export default HeroSection