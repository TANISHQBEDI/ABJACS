import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Overview() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col>
          <div className="d-flex flex-column gap-3">
            <p>Abja is a global consulting firm that provides companies with the expertise they need to expand in the international marketplace. We have helped companies to implement Oracle E-Business Suite and Oracle technology.</p>
            <p>Abja Team have been working with Oracle applications for more than fifteen years. We know how to maximize the benefits of Oracle and deliver exceptional added value to your business.</p>
            <p>As Oracle’s family of solutions continues to advance in complexity and scope to meet the growing demands of the market, Abja understands how the constantly changing world of technology affects our clients. Whether facing new challenges ranging from upgrading their existing solutions, re-aligning their technologies to meet their evolving business, to being newly introduced to Oracle solutions, Abja is there as a trusted advisor to guide our clients through the process.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
