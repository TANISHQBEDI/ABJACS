import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Vision() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col>
          <div className="d-flex flex-column gap-3">
            <p>Abja Consulting Services ( formerly Spanvi Technologies) is a management and technology consulting firm formed with the objective of facilitating our customer’s growth consistently by providing the brightest strategic business solutions.</p>
            <p>Abja Consulting Services offers cost effective and efficient technology solutions that bring in real benefit to the customers through proper leverage, integration and deployment of technologies and products supported by value add solutions and services.</p>
            <p>As a complete end-to-end technology solutions company, Abja Consulting Services places great importance on understanding our client’s businesses and core concerns. Our efficient, professional and results-driven approach to every opportunity enables us to maintain very high levels of client satisfaction.</p>
            <p>Abja Consulting Services helps to provide organizations with a complete, integrated view of their business, thereby facilitating the management of information they need for efficient performance and sound decision-making.
            Our vision is to be a leading provider of business technology solutions and services to our clients worldwide and thereby become their partners in progress.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
