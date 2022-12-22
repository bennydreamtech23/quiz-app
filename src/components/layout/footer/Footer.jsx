
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link} from "react-router-dom";
//import logo from "../../../assets/logo.png";
import {BsTwitter, BsInstagram, BsFacebook} from "react-icons/bs";
import footerStyles from "./Footer.module.scss";
import Button from 'react-bootstrap/Button';
const Footer = () =>{
  return(
   <footer>
   <Container fluid className={footerStyles.footerContainer}>
<Row>
<Col className="col-md">
      <ul>
          <li>
            <p className={footerStyles.title}>
             Menu
            </p>
            </li>
            <li>
            <Link to="/" className={footerStyles.linkFooter}>
             About
            </Link>
            </li>
            <li>
            <Link to="/" className={footerStyles.linkFooter}>
             Services
            </Link>
            </li>
            <li>
            <Link to="/" className={footerStyles.linkFooter}>
             Blog
            </Link>
            </li>
         <li>
            <Link to="/" className={footerStyles.linkFooter}>
             Contact
            </Link>
            </li>
        </ul>
</Col>

<Col className="col-md">
      <ul>
        <li>
            <p className={footerStyles.title}>
             Services
            </p>
            </li>
            <li>
            <Link to="/" className={footerStyles.linkFooter}>
             Planning
            </Link>
            </li>
            <li>
            <Link to="/" className={footerStyles.linkFooter}>
             Management
            </Link>
            </li>
            <li>
            <Link to="/" className={footerStyles.linkFooter}>
             Strategy 
            </Link>
            </li>
            
        <li>
            <Link to="/" className={footerStyles.linkFooter}>
             Market
            </Link>
            </li>
        </ul>
</Col>

<Col className="col-md">
      <ul className={footerStyles.footerIcon}>
      <li>
<Button variant="light"><BsTwitter></BsTwitter></Button>
</li>
      <li>
<Button variant="light"><BsFacebook></BsFacebook></Button>
</li>
      <li>
<Button variant="light"><BsInstagram></BsInstagram></Button>
</li>
        </ul>
</Col>
</Row>              
<div className={footerStyles.footerRuler}></div>
<div className={footerStyles.footerButtom}>
<Row>
<Col className="col-md">
      <ul>
          <li>
            <p>
             copyright 2022 Ultimatium reserved all Right Reserved
            </p>
            </li>
        </ul>
</Col>

<Col className="col-md">
      <ul>
        <li>
            <p>
             Privacy Policy
            </p>
            </li>
        </ul>
</Col>

<Col className="col-md">
      <ul>
        <li>
            <p>
            Terms of use
            </p>
            </li>
        </ul>
</Col>
</Row>      




</div>
  </Container>
   </footer>
    )
}
export default Footer
