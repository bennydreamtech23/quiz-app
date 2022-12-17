import img from "../../../assets/herosectionImg.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from "./HeroSection.module.scss";


const HeroSection = () =>{
  return(
<header className={styles.headerHero}>
<Container fluid className="p-5">
<Row xs={1} md={2} className="g-4 justify-content-md-center">
<Col className={styles.headerBox}>
<h1 className={styles.headerTitle}>
play Online Challenge & win Cash Daily!
</h1>
<p className={styles.headerSubtitle}>
Win up to 1000$ monthly from QuizBaj
</p>
<input type="number" className={styles.headerInput}/>
<button className={styles.headerBtn}>
REGISTER NOW
</button>
<div className={styles.headerContent}>
<h1 className={styles.headerBottom}> OF ACTIVE USERS RIGHT  </h1>
<h3 className={styles.headerBottomSub}>20,000+</h3>
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