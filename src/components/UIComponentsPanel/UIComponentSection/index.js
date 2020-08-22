import React from 'react'
import ComponentButton from './ComponentButton'
import * as  ReactBootstrap from 'react-bootstrap'

class UIComponentSection extends React.Component {
    render() {
        const rows = []
        for (var i = 0; i < this.props.values.length; i += 2) {
            const row = []
            row.push(<ComponentButton name={this.props.values[i]}></ComponentButton>);
            row.push(<ComponentButton name={this.props.values[i + 1]}></ComponentButton>);
            rows.push(row);
        }
        return (
            <>
                <ReactBootstrap.Button aria-controls="example-collapse-text">{this.props.name}</ReactBootstrap.Button>
                <ReactBootstrap.Collapse in={true}>
                    <div id="example-collapse-text">{rows}</div>
                </ReactBootstrap.Collapse>
            </>
        )
    }
}

export default UIComponentSection;