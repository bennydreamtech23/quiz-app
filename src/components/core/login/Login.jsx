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
    <Container className={LoginStyles.login}>
   <Row  className="d-flex flex-row-reverse">
     <Col className="col-md d-flex justify-content-center flex-column mb-3">
      <img src={imghero} alt="contact card"/>
      </Col>
      
      <Col className="col-md d-flex flex-column justify-content-center align-items-center">
 <input
          type="text"
          className={LoginStyles.login__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className={LoginStyles.login__textBox}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        
        <div className="d-flex flex-column justify-content-center">
        <button
          className="btn mb-3"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button className="btn" onClick={signInWithGoogle}>
          Login with Google
        </button>
        </div>
        <div className="col-md d-flex flex-column justify-content-center">
          <Link to="/reset" className="link">Forgot Password</Link>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p>
          Don't have an account?
          </p>
        <button className="btn">
        <Link to="/signup" className="link">Register</Link> 
        </button>
        </div>
</Col>
    
      </Row>
    </Container>
  );
}
export default Login;