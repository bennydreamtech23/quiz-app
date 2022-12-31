
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import contactStyles from "./Contact.module.scss";
const Contact = () =>{
  return(
    <>
   <Container fluid className={contactStyles.contactContainer}>
     <div className='col-md testimonyBox'>
    <Card className={contactStyles.testimonyCard}>
      <Card.Body  className={contactStyles.CardContent}>
        <Card.Title className={contactStyles.headerTitleContact}>Get In Touch</Card.Title>
        <Card.Text className={contactStyles.headerSubTitleContact}>Contact us for any information</Card.Text>

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
      <button  className='btn mt-3' type="submit">
        Submit
      </button>
    </Form>
      </Card.Body>
    </Card>
    </div>
    </Container>
    </>
  )
}
export default Contact