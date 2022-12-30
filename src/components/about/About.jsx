import AboutStyles from "./About.module.scss";
import imghero from "./../../assets/3426526.jpg";
import vision from "./../../assets/13038.jpg";
import approach from "./../../assets/3785210.jpg";
import process from "./../../assets/4428861.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const About = () =>{
  return(
    <Container className={AboutStyles.about}>
       <Row className="d-flex flex-row-reverse">
       <Col className="col-md d-flex justify-content-center flex-column mb-3">
       <img src={imghero} className={AboutStyles.img} alt=""/>
       </Col>
       
      <Col className="col-md">
    <h1 className={AboutStyles.headerTitle}>
    We Love Innovation and Challenge
    </h1>
    <p className={AboutStyles.headertext}>
    Ultimatium is built by a Developer to try solve the issue of searching various search engine for challenge based on the stack of study.
    Ultimaium Arena is trying to collabaorate with other team of Developers to bring this solution to you.
    </p>
    
    <button className={AboutStyles.headerBtn}>
    REGISTER NOW
    </button>
    
    <div className={AboutStyles.headerContent}>
<h1 className={AboutStyles.headerBottom}> OF ACTIVE USERS</h1>
<h3 className={AboutStyles.headerBottomSub}>20,000+</h3>
</div>
</Col>
   </Row>
   
   <div className="row">
    
     <div style={{whitespace:"nowrap"}} className={AboutStyles.col}>
      <div className={AboutStyles.scrollingcolSauter}>
          <p>FRONTEND</p>
      </div>
      
      <div className={AboutStyles.scrollingcolevolved}>
      <p>BACKEND</p>
      </div>
      
      <div className={AboutStyles.scrollingcolsMatrics}>
       <p>MOBILE</p>
      </div>
      
      <div className={AboutStyles.scrollingcoltechbrand}>
         <p>DESIGN</p>
      </div>
      
      <div className={AboutStyles.scrollingcolSauter}>
          <p>MANAGER</p>
      </div>
      
      <div className={AboutStyles.scrollingcolevolved}>
      <p>CHALLENGE</p>
      </div>
      </div>
    </div>
    
     <Row className="d-flex flex-row mt-5 mb-5">
        <Col className="col-md d-flex justify-content-center flex-column mb-3">
       <img src={vision} className={AboutStyles.imgCard} alt=""/>
       </Col>
      <Col className="col-md">
    <h1 className={AboutStyles.headerSubtitleBold}>
Our Vision
    </h1>
    <p className={AboutStyles.headerpara}  style={{textAlign:"center"}}>
    Ultimatium is built to try solve the issue of searching various search engine for challenge based on the stack of study.
    It main objective is to relieve developers, designers, product manager and other stack in tech the stress and headache of searching various websites and relying on other developer challenge.
    </p>
</Col>
   </Row>
   
    <Row className="d-flex flex-row-reverse  mb-5">
     <Col className="col-md d-flex justify-content-center flex-column mb-3">
       <img src={approach} className={AboutStyles.imgCard} alt=""/>
       </Col>
      <Col className="col-md">
    <h1 className={AboutStyles.headerSubtitleBold}>
Our Approach
    </h1>
    <p className={AboutStyles.headerpara} style={{textAlign:"center"}}>
   Ultimatium carried out an extensive research on challenges on each stack and based on the level of the user.
   The Team also consult other developers to ask for their opinion on the subject matter.
    </p>
</Col>
   </Row>
   
 <Row className="d-flex flex-row">
      <Col className="col-md d-flex justify-content-center flex-column mb-3">
       <img src={process} className={AboutStyles.imgCard} alt=""/>
       </Col>
       
      <Col className="col-md">
    <h1 className={AboutStyles.headerSubtitleBold}>
Our   process
    </h1>
    <p className={AboutStyles.headerpara} style={{textAlign:"center"}}>
   We have succefully launched the Frontend and Designer challenge and working toward the launching of other stack.
   In progress with our collaboration with other tech stack.
    </p>
</Col>
   </Row>
    </Container>
)
}
export default About