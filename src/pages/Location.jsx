import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

const locations=[
    {
        id:1,
        title:"Corporate Office and Development Center :",
        oname:"Abja Consulting Services",
        onumber:"Office No 207/208, Ganga Collidium",
        landmark:"Next to Gangadham Phase 1, Bibwewadi,",
        pincode:"Pune – 411037 (Maharashtra) India"
    },
    {
        id:2,
        title:"UAE Office :",
        oname:"ABJ Tech Computer Software House",
        onumber:"401, Al Zarouni Business Center,",
        landmark:"Sheikh Zayed Road, Barsha First,",
        pincode:"Dubai, UAE - 121479"
    },
]

export default function Location() {
  return (
    <Container  className='locationCont' fluid>
        {locations.map((location)=>(
            <Card border='light' style={{ width: '30rem',display:'flex' }}>
                <Card.Body>
                        <Card.Title>{location.title}</Card.Title>
                        <Card.Text>{location.oname}</Card.Text>
                        <Card.Text>{location.onumber}</Card.Text>
                        <Card.Text>{location.landmark}</Card.Text>
                        <Card.Text>{location.pincode}</Card.Text>
                </Card.Body>
            </Card>
        ))}
    </Container>
  )
}
