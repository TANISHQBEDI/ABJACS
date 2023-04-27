import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Dms() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col>
          <div className="d-flex flex-column gap-3">
            <p>While Data Management is crucial for today’s businesses, most of the organizations are ill-equipped to derive maximum value from this data. They do not have the necessary experience, expertise or resources for collection, extraction, storage, processing, analyzing or monetizing this data.</p>
            <p>ABJA helps some of the world’s leading companies leverage data competently for significant processes and business decisions. In this way, we provide them with business value.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
