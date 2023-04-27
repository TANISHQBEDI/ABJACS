import React from 'react'
import cardHome from '../data/cardHome'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardGen() {
  return (
    <>
        {cardHome.map((card)=>(
                <Card key={card.content} border='light' style={{ width: '20rem',display:'flex' }}>
                    <Card.Img  variant='top' src={card.image}/>
                    <Card.Body >
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.content}</Card.Text>
                        <Button variant="primary">TAKE A TOUR</Button>
                    </Card.Body>
                </Card>
            
        ))}
    </>
  )
}
