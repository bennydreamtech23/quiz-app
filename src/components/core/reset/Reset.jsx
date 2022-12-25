import imghero from "../../../assets/heroimage.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset} from "../login/firebase";
import resetStyle from "./Reset.module.scss";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (
    <Container fluid className={resetStyle.reset}>
    
    <Row className="d-flex flex-row-reverse">
     <Col className="col-md d-flex justify-content-center flex-column mb-3">
      <img src={imghero} alt="contact card"/>
      </Col>
      
      <Col className="col-md d-flex flex-column justify-content-center align-items-center">
      
<input
          type="text"
          className={resetStyle.reset__textBox}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="btn" onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>

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
export default Reset;