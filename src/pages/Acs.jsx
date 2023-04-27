import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Acs() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col>
          <div className="d-flex flex-column gap-3">
            <p>Information systems are steadily gaining in importance. Because of constant changes in technology, it is not always easy to be sure those systems controls are working. And because of their importance, missing controls can be more costly than ever.</p>
            <p>Many organizations want a third-party IT audit to review controls, ABJA offers the Information Systems Controls Checkup. This service includes interviews with top management processes, review and documentation of the control environment and testing of key controls. Each check-up is custom designed based on the needs of the organization.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
