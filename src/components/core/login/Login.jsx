import imghero from "../../../assets/heroimage.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginStyles from "./Login.module.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  
  return (
     <Container fluid className={LoginStyles.register}>
    <Row className="d-flex flex-row-reverse">
        <Col className="col-md d-flex justify-content-center flex-column">
      <img src={imghero} alt="contact card"  className={LoginStyles.imgContainer}/>
      </Col>
      
      <Col className="col-md">
      <div className={LoginStyles.col}>
      <h3 className="text-center">Welcome Back</h3>
      <p className="text-center">Welcome back! Please enter your details</p>
      
        <div className="d-flex flex-column justify-content-center">
       <button className="btn" onClick={signInWithGoogle}>
          Login with Google
        </button>
      </div>
        <strong className={LoginStyles.ruler}>OR</strong>
         <div className="d-flex flex-column justify-content-center">
        <input
          type="text"
          className= {LoginStyles.register__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        
        <input
          type="password"
          className={LoginStyles.register__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
        <div className={LoginStyles.ruler}>
          <Link to="/reset" className={LoginStyles.link}>Forgot Password</Link>
        </div>
        
        <div className="d-flex flex-column justify-content-center">
        <button
          className="btn mb-3"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        </div>
       
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>
          Don't have an account?
          </p>
        <button className="btn mb-5">
        <Link to="/signup" className="link">Register</Link> 
        </button>
        </div>
        </div>
      </Col>
      </Row>
    </Container>
  );
}
export default Login;