import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';

import toyota from "../images/clients/toyota.jpg"
import jamjom from "../images/clients/jamjom.jpg"
import swm from "../images/clients/swm.jpg"
import cchmclogo from "../images/clients/cchmclogo.jpg"
import leapFrog from "../images/clients/leapFrog.png"
import bodhtree from "../images/clients/bodhtree.png"
import oracle from "../images/clients/oracle.jpg"
import serene from "../images/clients/serene.gif"
import airtel from "../images/clients/airtel.jpg"
import kirloskar from "../images/clients/kirloskar.jpg"
import cummins from "../images/clients/Cummins.jpg"
import symantec from "../images/clients/symantec.png"
import appzen from "../images/clients/appzen.png"
import bmc from "../images/clients/bmc.png"
import medline from "../images/clients/medline.png"
import kpmg from "../images/clients/kpmg.png"


const clients=[
    {
        id:1,
        image: toyota ,
        name:'TOYOTA',
        content:'Algeria & Lebanon'
    },
    {
        id:2,
        image: jamjom ,
        name:'JAMJOOM PHARMA, JEDDAH',
        content:'Saudi Arabia'
    },
    {
        id:3,
        image: swm ,
        name:'SWM INTERNATIONAL',
        content:'Brazil, Poland, France, China, Luxomburg, USA'
    },
    {
        id:4,
        image: cchmclogo ,
        name:'CINCINNATI CHILDREN’S HOSPITAL',
        content:'USA'
    },
    {
        id:5,
        image:leapFrog,
        name:'LEAPFROG ENTERPRISES',
        content:'California US'
    },
    {
        id:6,
        image:bodhtree,
        name:'BODHTREE CONSULTING, INDIA , US',
        content:'Calix, Igloo, JDSU'
    },
    {
        id:7,
        image:oracle,
        name:'ORACLE AFRICA',
        content:'Ministry of Finance, National Bank of Egypt'
    },
    {
        id:8,
        image:oracle,
        name:'ORACLE INDIA',
        content:'HDFC , Magma , Agrotech'
    },
    {
        id:9,
        image:serene,
        name:'SERENE CORPORATION',
        content:'ANASYS, Move.com, Xlinks, Polycom'
    },
    {
        id:10,
        image:airtel,
        name:'C&K ONLINE',
        content:'–Airtel , India'
    },
    {
        id:11,
        image:kirloskar,
        name:'KIRLOSKAR PNEUMATIC',
        content:'India'
    },
    {
        id:13,
        image:kirloskar,
        name:'KIRLOSKAR CHILLERS',
        content:'India'
    },
    {
        id:14,
        image:cummins,
        name:'CUMMINS INDIA LTD',
        content:''
    },
    {
        id:15,
        image:symantec,
        name:'SYMANTEC CORPORATION',
        content:'India'
    },
    {
        id:16,
        image:appzen,
        name:'',
        content:''
    },
    {
        id:17,
        image:bmc,
        name:'',
        content:''
    },
    {
        id:18,
        image:medline,
        name:'',
        content:''
    },
    {
        id:19,
        image:kpmg,
        name:'',
        content:''
    },

]

export default function Clients() {
  return (
    <Container className='clientCont'>
        {clients.map((client)=>(
            <Card  style={{ width: '18rem',display:'flex' }}>
                <Card.Img className='clientImg' variant='top' src={client.image}/>
                <Card.Body>
                    <Card.Title>{client.name}</Card.Title>
                    <Card.Text>{client.content}</Card.Text>
                </Card.Body>

            </Card>
        ))}
    </Container>
  )
}
