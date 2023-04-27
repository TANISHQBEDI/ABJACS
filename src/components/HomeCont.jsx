import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import CarouselHome from "./CarouselHome";
import CardGen from './CardGen';

export default function HomeCont() {
  return (
    <Container fluid>
        <CarouselHome/>
        <div className="homeCont">
            <span>
                Abja Consulting Services (formerly Spanvi Technologies) is a consulting company 
                specializing in the Oracle Enterprise Resource Planning 
                (ERP) and IT market for mid- to large-sized companies across the globe.
            </span>
            <span> 
                Abja helps industries implement , upgrade , intergrate , customize and facilitates all related
                organizational changes to assure that each of its clients realize the full business benefits of their 
                ERP implementation. We also offer IT strategy, 
                ERP staffing and expert system health check services.
            </span>
            <span>
                Abja offers you one of the best environments for career development and progression. 
                We believe that by giving mutual respect, recognition, trust, open communication, transparency and opportunities 
                for growth, employees will perform with their fullest potential and will be sincere, 
                dedicated and committed to Abja
            </span>
        </div>
        <div className="cardCont">
            <CardGen/>
        </div>
        
        

        
    </Container>
  )
}
