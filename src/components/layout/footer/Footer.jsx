
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footerStyles from "./Footer.module.scss";
import ListGroup from 'react-bootstrap/ListGroup';
const Footer = () =>{
    const alertClicked = () => {
    alert('You clicked the third ListGroupItem');
  };
  return(
   <footer>
   <Container fluid className={footerStyles.footerContainer}>
<Row>
<Col>
<ListGroup defaultActiveKey="#link1" style= {{width:'10rem'}}>
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" disabled>
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item>
    </ListGroup>
</Col>

</Row>
  </Container>
   </footer>
    )
}
export default Footer