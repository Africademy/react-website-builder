import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import UIComponentsPanel from "./UIComponentsPanel";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./Logo";
import Toolbar from "./ToolBar";
import WebPreviewArea from "./WebPreviewArea";
import PropsPanel from "./PropsPanel";
import "./App.css";
/* TODO: WebPreviewArea- grid fix
         RightHandlerPanel 
         Drag & Drop api walkthrough
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attr: {},
      props: {}
    };
    this.handle_stateChange = this.handle_stateChange.bind(this);
    this.handle_propPanel = this.handle_propPanel.bind(this);
  }

  handle_propPanel(input) {
    this.setState({ props: input });
  }
  handle_stateChange(input) {
    this.setState({ attr: input });
  }

  render() {
    var x = (
      <Container fluid>
        <div className="row min-vh-100">
          <div className="col-12">
            <div className="d-flex flex-column h-100">
              <Row className="m-2">
                <Logo title="React" />
              </Row>
              <Row className="m-2">
                <Toolbar tools={this.props.tools} />
              </Row>
              <Row className="d-flex flex-grow-1">
                <Col md="2" className="comp-panel">
                  <UIComponentsPanel
                    sections={this.props.sections}
                  ></UIComponentsPanel>
                </Col>
                <Col md="7" className="web-prev-area">
                  <WebPreviewArea
                    change={this.handle_stateChange}
                    elems={this.state.attr}
                    propPanel={this.handle_propPanel}
                  />
                </Col>
                <Col md="3">
                  <PropsPanel
                    attr={this.state.props}
                    change={this.handle_stateChange}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    );
    return x;
  }
}

export default App;
