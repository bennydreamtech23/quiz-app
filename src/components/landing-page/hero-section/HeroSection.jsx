
import imghero from "../../../assets/heroimage.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
import styles from "./HeroSection.module.scss";


const HeroSection = () =>{
  return(
<header className={styles.headerHero}>
<Container fluid className="p-5">
<Row className="d-flex flex-row-reverse">

 <Col className="col-md d-flex justify-content-center flex-column mb-3">
      <img src={imghero} alt="contact card"/>
      </Col>
      
<Col className="col-md">
<h1 className={styles.headerTitle}>
Get Better with Online Challenge & improve in your stack Daily!
</h1>
<p className={styles.headerSubtitle}>
Get better daily with CODEBASE CHALLENGE
</p>
<input type="number" className={styles.headerInput}/>
<button className={styles.headerBtn}>
REGISTER NOW
</button>
<div className={styles.headerContent}>
<h1 className={styles.headerBottom}> OF ACTIVE USERS</h1>
<h3 className={styles.headerBottomSub}>20,000+</h3>
</div>
</Col>
</Row>
</Container>
</header>
    )
}
export default HeroSection