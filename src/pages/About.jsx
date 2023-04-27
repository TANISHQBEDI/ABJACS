import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import ComputerIcon from '@mui/icons-material/Computer';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

import Girish_Gupta from "../images/Girish_Gupta.jpg"
import Minakshi_Gupta from "../images/Minakshi_Gupta.jpg"

import { Card } from 'react-bootstrap';


export default function About() {
  return (
    // <Container fluid>
    <>
    
        <Row style={{height:'620px'}} className="align-items-center ">
          <Col>
            <div style={{textAlign:'center'}} className="d-flex flex-column gap-3">
              <h1 style={{color:'rgb(35, 118, 154)'}}>ABJA CONSULTING SERVICES</h1>
              <h1 style={{color:'rgb(35, 118, 154)'}}>( FORMERLY SPANVI TECHNOLOGIES )</h1>
            </div>
          </Col>
      </Row>
      <Row style={{padding:'100px 0 100px 0'}}>
        <Col lg={6}>
            <div className='d-flex flex-column gap-3 mx-4' style={{textAlign:'justify'}}>
                <h6 style={{color:'rgb(35, 118, 154)',fontWeight:'bolder'}}>OUR MISSION</h6>
                <p style={{lineHeight:"1.3"}}>Our mission is to enhancing the business growth of our customers with creative Design and Development to deliver market-defining high-quality solutions that create value and reliable competitive advantage for our clients around the world.</p>
                <p style={{lineHeight:"1.3"}}>Our mission is to deliver optimal solutions with quality and services at reasonable prices. For us customer satisfaction is given top place. We are very friendly in our dealings to the customers and it helps us retain existing clients and expand customer circle. We always try to improve the quality of our products by exploring innovative ideas.</p>
            </div>
        </Col>
        <Col lg={6}>
            <div className='d-flex flex-column gap-3 mx-4' style={{textAlign:'justify'}}>
                <h6 style={{color:'rgb(35, 118, 154)',fontWeight:'bolder'}}>OUR VISION</h6>
                <p style={{lineHeight:"1.3"}}>Our vision is to be a leading provider of business technology solutions and services to our clients worldwide and thereby become their partners in progress.</p>
                
            </div>
        </Col>
      </Row>
      <Row className='align-items-center' style={{height:'500px',background:'#1cbac8'}}>
        <Col style={{height:'100%'}}>
          <div className='aboutLearnMore'>
            <h2>WE HAND-CRAFT CREATIVE</h2>
            <h2>WEB SOLUTIONS WITH SOLID STRATEGIES</h2>
            <h2>& POWERFUL TECHNOLOGIES.</h2>
            <ul style={{listStyle:'none',display:'flex',justifyContent:'center',gap:'20px'}}>
              <li><Button style={{borderRadius:'0'}} variant='dark'>LEARN MORE</Button></li>
              <li><Button style={{borderRadius:'0'}} variant='light'>CONTACT US</Button></li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row style={{height:'300px',background:'#222222'}}>
        <Row style={{margin:'0',padding:'0'}}>
          <Col className='aboutServItem' md={4}><ComputerIcon fontSize='large'/>&nbsp;Enterprise Application</Col>
          <Col className='aboutServItem' md={4}><PhoneIphoneIcon fontSize='large'/>&nbsp;Mobile Applications Design</Col>
          <Col className='aboutServItem' md={4}><SupportAgentIcon fontSize='large'/>&nbsp;Support Services</Col>
        </Row>
        <Row style={{margin:'0',padding:'0'}}>
          <Col className='aboutServItem' md={4}><DeveloperModeIcon fontSize='large'/>&nbsp;Development</Col>
          <Col className='aboutServItem' md={4}><SignpostOutlinedIcon fontSize='large'/>&nbsp;Management Servicves</Col>
          <Col className='aboutServItem' md={4}><ThumbUpAltOutlinedIcon fontSize='large'/>&nbsp;Offshore Center</Col>
        </Row>
      </Row>
      <div className="teamCont">
        <span style={{fontWeight:'bolder',fontSize:'1.5em',color:'#076483'}}>OUR FANTASTIC TEAM</span>
        <span style={{letterSpacing:'2px',fontSize:'1.3em',color:'#999999'}}>Performance , Quality , Perfection , Delivery</span>
        <div className='team'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Girish_Gupta} />
            <Card.Body>
              <Card.Text style={{fontWeight:'600',color:'#076483'}}>GIRISH GUPTA</Card.Text>
              <Card.Text style={{color:'#999999'}}>Founder & CEO</Card.Text>
              <Card.Text>
                Girish Gupta is Founder and Chief Executive Officer. Previously, Girish served as Managing Director and Founder of Exora Software Solutions.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Minakshi_Gupta} />
            <Card.Body>
              <Card.Text style={{fontWeight:'600',color:'#076483'}}>MINAKSHI GUPTA</Card.Text>
              <Card.Text style={{color:'#999999'}}>Founder & Director - Talent Acquisition</Card.Text>
              <Card.Text>
                Minakshi is Doctor by Profession and founder of Abja Consulting Services. She is successful in bringing the team together. Her skills and ability to understand the requirement is helping both clients and candidates find the right fit.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        
      </div>
      </>
    // </Container>
  )
}
