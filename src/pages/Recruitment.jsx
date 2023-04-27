import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Recruitment() {
  return (
    <Container fluid>
      <Row className="align-items-center justify-content-center m-lg-5">
        <Col >
          <div className="d-flex flex-column gap-3">
            <p>ABJA have a fully integrated staff recruitment and selection process.  It includes detailed assignment briefing and fully validated testing procedures, as well as assessments and behavioural interview techniques.  Extensive reference checking enables us to select and refer only candidates of the highest calibre ideally matched to your needs.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
