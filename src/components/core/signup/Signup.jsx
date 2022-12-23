import imghero from "../../../assets/heroimage.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';

    
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link, useNavigate} from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../login/firebase";
import signupStyles from "./Signup.module.scss";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  
  
  return (
    <Container fluid className= {signupStyles.register}>
    <Row>
      <Col className="col-md">
       <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>FULL NAME</Form.Label>
        <Form.Control type="text" placeholder="full name"
        className={signupStyles.register__textBox}
          value={name}
          onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      
            <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>SLACK</Form.Label>
            <Form.Select size="lg">
     <option>Select your Slack</option>
        <option>FRONTEND DEVELOPER</option>
        <option>MOBILE DEVELOPER</option>
      <option>BACKEND DEVELOPER</option>
     <option>PRODUCT DESIGNER</option>
      <option>PRODUCT DESIGNER</option>
      </Form.Select>
      </Form.Group>

      
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control type="email" placeholder="email"
        className={signupStyles.register__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PASSWORD</Form.Label>
        <Form.Control type="password" placeholder="password"
        className={signupStyles.register__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Form.Group className="mb-3 d-flex justify-content-center"
      controlId="formBasicCheckbox">
      <button className="btn" type="submit" onClick={register}>
        Register
      </button>
    
     <button
          className="btn"
          onClick={signInWithGoogle}>
          Register with Google
        </button>
      </Form.Group>
      
       <Form.Group class="d-flex justify-content-center">
          <button className="btn"><Link to="/" className="link">Login
          </Link></button>
          </Form.Group>
        
    </Form>
      </Col>
      
      <Col>
      <img src={imghero} alt="contact card" className="col-md"/>
      </Col>
      </Row>
    </Container>
  );
}
export default Signup;
