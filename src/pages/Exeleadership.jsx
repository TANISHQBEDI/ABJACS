import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

import Girish_Gupta from "../images/Girish_Gupta.jpg"
import Minakshi_Gupta from "../images/Minakshi_Gupta.jpg"

const leadership=[
    {
        id:1,
        name:'GIRISH GUPTA',
        role:'Founder & CEO',
        image: Girish_Gupta
    },
    {
        id:2,
        name:'MINAKSHI GUPTA',
        role:'Founder & HR Director',
        image: Minakshi_Gupta
    },

]

export default function Exeleadership() {
  return (
    <Container className='leadershipCont'>
        {leadership.map(item=>(
            <Card border='light' style={{ width: '20rem',display:'flex' }}>
                <Card.Img variant='top' src={item.image}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.role}</Card.Text>
                </Card.Body>
            </Card>
        ))}
    </Container>
  )
}
