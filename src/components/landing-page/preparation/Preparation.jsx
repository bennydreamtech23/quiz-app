
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import productmanager from "../../../assets/3785210.jpg";
import productdesigner from "../../../assets/13038.jpg";
import backend from "../../../assets/9813.jpg";
import mobileDeveloper from "../../../assets/8401.jpg";
import frontend from "../../../assets/3426526.jpg";
import PreparationStyles from "./Preparation.module.scss";
//import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const Preparation = () =>{
  return(
    <>
  <Container fluid className={PreparationStyles.PreparationContainer}>
    <div className={PreparationStyles.rowproduct}>
    <h1 className={PreparationStyles.headerTitle}>Let's Sharp Your Preparation</h1>
<Link  to="/login" className={PreparationStyles.PreparationBtn}>
           GET STARTED
            </Link>
</div>

<Row>
    <Card 
    className={PreparationStyles.darkgreen}
    style={{ width: '18rem' , height: "17rem"}}>
      <Card.Body>
      <Card.Img src={productmanager} alt="picture1" className={PreparationStyles.orangeImg}/>
      <Card.Title className="text-center p-2">Product Manager</Card.Title>
      </Card.Body>
    </Card>

    <Card 
    className={PreparationStyles.orange}
    style={{ width: '18rem' , height: "17rem"}}>
      <Card.Body>
      <Card.Img src={productdesigner} alt="picture2" className={PreparationStyles.orangeImg}/>
      <Card.Title className="text-center p-2">Product Designer</Card.Title>
      </Card.Body>
    </Card>

    <Card 
    className={PreparationStyles.darkgreen}
    style={{ width: '18rem' , height: "17rem"}}>
      <Card.Body>
      <Card.Img src={backend} alt="picture1" className={PreparationStyles.orangeImg}/>
      <Card.Title className="text-center p-2">Backend Developer</Card.Title>
      </Card.Body>
    </Card>

    <Card 
    className={PreparationStyles.orange}
    style={{ width: '18rem' , height: "17rem"}}>
      <Card.Body>
      <Card.Img src={frontend} alt="picture1" className={PreparationStyles.orangeImg}/>
      <Card.Title className="text-center p-2">Frontend Developer</Card.Title>
      </Card.Body>
    </Card>
    

    <Card 
    className={PreparationStyles.darkgreen}
    style={{ width: '18rem' , height: "17rem"}}>
      <Card.Body>
      <Card.Img src={mobileDeveloper} alt="picture1" className={PreparationStyles.orangeImg}/>
      <Card.Title className="text-center p-2">Mobile Developer</Card.Title>
      </Card.Body>
    </Card>
    </Row>
</Container>
    </>
    )
}
export default Preparation