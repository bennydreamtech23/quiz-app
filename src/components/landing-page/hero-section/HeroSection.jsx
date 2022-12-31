
import imghero from "../../../assets/heroimage.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Card from 'react-bootstrap/Card';
import styles from "./HeroSection.module.scss";


const HeroSection = () =>{
  return(
<Container fluid>
<header  className={styles.headerHero}>
<Row className="d-flex flex-row-reverse">
 <Col className="col-md d-flex justify-content-center flex-column mb-3">
      <img src={imghero} alt="contact card" className={styles.heroimg}/>
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
</header>
<div className={styles.wave}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4AA2F7" fill-opacity="1" d="M0,160L48,186.7C96,213,192,267,288,245.3C384,224,480,128,576,117.3C672,107,768,181,864,181.3C960,181,1056,107,1152,101.3C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</div>
</Container>
    )
}
export default HeroSection