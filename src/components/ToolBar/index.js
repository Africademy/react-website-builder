import React from "react";
import "./toolbar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Toolbar(props) {
  const columns = [];
  const task = props.names;
  for (var i = 0; i < task.length; i++) {
    columns.push(
      <Col className="btnProp" key={task[i].name.toString()}>
        {task[i].name}
      </Col>
    );
  }
  return (
    <>
      <Container fluid className="headingOp">
        <Row>
          {columns}
        </Row>
      </Container>
    </>
  );
}
export default Toolbar;
