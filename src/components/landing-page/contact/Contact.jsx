import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import contactStyles from "./Contact.module.scss";
const Contact = () =>{
  return(
    <>
   <Container fluid className={contactStyles.TestimonyContainer}>
    <Row>
     <Col className={contactStyles.testimonyBox}>
    <Card className={contactStyles.testimonyCard}>
      <Card.Body  className={contactStyles.CardContent}>
      <Card.Text className={contactStyles.headerSubTitleContact}>CONTACT US</Card.Text>
        <Card.Title className={contactStyles.headerTitleContact}>Get In Touch</Card.Title>
      <Form>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>EMAIL</Form.Label>
        <Form.Control type="email"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

     <FloatingLabel controlId="floatingTextarea2" label="MESSAGE">
        <Form.Control
          as="textarea"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
    <div className="d-flex flex-column justify-content-center align-items-center">
      <button  className='btn mt-3' type="submit">
        Submit
      </button>
      </div>
    </Form>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </>
  )
}
export default Contact