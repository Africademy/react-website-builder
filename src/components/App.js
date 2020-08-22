import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import UIComponentsPanel from './UIComponentsPanel';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    render() {
        var x = (
        <Container fluid>
            <Col md="2">
                <UIComponentsPanel sections={this.props.sections}></UIComponentsPanel>
            </Col>
        </Container>
        )
        return x;

    }
}

export default App;