import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Appdev() {
  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <div className="d-flex flex-column gap-3">
            <p>Our EBS Application Development practice specializes in application services , integration development that span the full software development life cycle.</p>
            <p>We work closely with clients to understand their business objectives, define their software requirements, and work interactively with clients to write specifications, test and integrate the custom software solution across the client’s enterprise systems.</p>
            <p>By involving our experienced business analysts and subject matter experts; we design, architect, and develop solutions that enable client systems to function optimally operate seamlessly.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
