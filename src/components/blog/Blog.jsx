
import vision from "./../../assets/13038.jpg";
import approach from "./../../assets/3785210.jpg";
import process from "./../../assets/4428861.jpg";
import mission from "./../../assets/9813.jpg";
import statement from "./../../assets/8401.jpg";
import object from "./../../assets/picture2.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import blogStyles from "./blog.module.scss";
const Blog = () =>{

  return(
    <Container fluild className="p-5">
  <div className={blogStyles.container10}>
    <Row>
  
      <div class="col-md mb-5">
      <Card>
    <Card.Img variant="top" src={vision} alt='img1' className={blogStyles.img}></Card.Img>
        <div className={blogStyles.content}>
    <Card.Title>Three Important Things You Must Look For While Choosing Your Stack</Card.Title>
    <small>Jan 30, 2022<strong> John Benedict</strong></small>
    
  <Card.Text>You must be honest with yourself and llok for the stack you are comfortable working with and at the same time you can develop and grow with.
  These three things i will be discussing is based on my own viewpoint...</Card.Text>
  <button className="btn">READ MORE</button>
 </div>
 </Card>
 </div>
 
    <div class="col-md mb-5">
       <Card>
   <Card.Img variant="top" src={statement} alt='img1' className={blogStyles.img}></Card.Img>
        <div class={blogStyles.content}>
      <Card.Title> The Beauty of Challenge</Card.Title>
    <small>March 30, 2022<strong> Eric Williams</strong></small>
    
 <Card.Text>What is the beauty of learning without pratice, taken challenge related to your field allow you to see the insights of what is done in your field...</Card.Text>
  <button className="btn">READ MORE</button>
 </div>
  </Card>
    </div>
    
      <div class="col-md  mb-5">
       <Card>
    <Card.Img variant="top" src={object} alt='img1' className={blogStyles.img}></Card.Img>
        <div class={blogStyles.content}>
    <Card.Title>Tech Is For Everyone</Card.Title>
    <small>Aug 28, 2022<strong> Clement John</strong></small>
     <Card.Text>I was feel tech is smart for people and youngster, until i decided to try it out and reralize that tech is for everyone that has passion for what tech involves is ready to grow in it....</Card.Text>
  <button className="btn">READ MORE</button>
 </div>
   </Card>
    </div>


      <div class="col-md  mb-5">
<Card>
<Card.Img variant="top" src={mission} alt='img1' className={blogStyles.img}></Card.Img>
        <div class={blogStyles.content}>
    <Card.Title>How to Explain API To Non Tech Person </Card.Title>
    <small> Oct 30, 2022<strong> Jane Catherine</strong></small>
    
<Card.Text>API can be seen as the staff in a Resturant, that collect your order and give it to the chef and return back with your food..... </Card.Text>
 <button className="btn">READ MORE</button>
 </div>
 </Card>
 </div>
 
    <div class="col-md mb-5">
    <Card>
     <Card.Img src={process} alt='img1' className={blogStyles.img}></Card.Img>   
        <div class={blogStyles.content}>
    <Card.Title>My Tech Journey</Card.Title>
    <small>July 30, 2022<strong>Bernedette Godwin</strong></small>
    
  <Card.Text>My Tech experience has thought me alot such as understanding, patience and Cooperation, I have learnt alot since I entered Tech...</Card.Text>
  <button className="btn">READ MORE</button>
 </div>
 </Card>
    </div>
    
      <div class="col-md mt-5">
      <Card>
      <Card.Img src={approach} alt='img1' className={blogStyles.img}></Card.Img>  
        <div class={blogStyles.content}>
    <Card.Title>React Native to Flutter</Card.Title>
    <small>Nov 28, 2022<strong> Uche John</strong></small>
  <Card.Text>React native help react developer to be able to easily switch to mobile developer with the comparison and understanding from React...</Card.Text>
    <button className="btn">READ MORE</button>
 </div>
 </Card>
    </div>
    
 </Row>
  </div>

  </Container>
)
}
export  default Blog