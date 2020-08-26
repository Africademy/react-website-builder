import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import UIComponentsPanel from './UIComponentsPanel';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './Logo';
import Toolbar from './ToolBar';
import WebPreviewArea from './WebPreviewArea'

/* TODO: WebPreviewArea- grid fix
         RightHandlerPanel 
         Drag & Drop api walkthrough
*/

class App extends React.Component {
    render() {
        var x =

            (
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
                                    <Col md="2">
                                        <UIComponentsPanel sections={this.props.sections}></UIComponentsPanel>
                                    </Col>
                                    <Col md="7" >
                                        <WebPreviewArea />
                                    </Col>
                                    <Col md="3">

                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
            )
        return x;

    }
}

export default App;