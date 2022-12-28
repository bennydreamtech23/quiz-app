import imghero from "../../../assets/heroimage.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {Link, useNavigate} from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
}from "../login/firebase";
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
    <Container fluid className={signupStyles.register}>
    <Row className="d-flex flex-row-reverse">
        <Col className="col-md d-flex justify-content-center flex-column mb-3">
      <img src={imghero} alt="contact card" className={signupStyles.heroimg}/>
      </Col>
      <Col className="col-md d-flex flex-column justify-content-center align-items-center">
      
        <input type="text"
          className={signupStyles.register__textBox}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        
        <input
          type="text"
          className= {signupStyles.register__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        

        <input
          type="password"
          className={signupStyles.register__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        
        <div className="d-flex flex-column justify-content-center">
        <button className="btn mb-3" onClick={register}>
          Register
        </button>
        <button
          className="btn"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        </div>
        
      <div className="d-flex flex-column justify-content-center align-items-center mb-5">
         <p> Already have an account? </p>
          <button className="btn"><Link className="link mb-5" to="/login">Login</Link></button>
        </div>
      </Col>
      </Row>
    </Container>
  );
}
export default Signup;
