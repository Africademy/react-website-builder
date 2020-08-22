import React from 'react'
import ComponentButton from './ComponentButton'
import SectionCollapseButton from './SectionCollapseButton'
import * as  ReactBootstrap from 'react-bootstrap'
import './UIComponentSection.css'

class UIComponentSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {isExpanded : true}
        this.handleExpansion = this.handleExpansion.bind(this)
    }

    handleExpansion(e){
        this.setState((state) => ({isExpanded : !state.isExpanded }));
    }

    render() {
        const rows = []
        const len = this.props.values.length;
        for (var i = 0; i < len/3; i++) {
            const row = []
            for(var j=i*3,k=0;j<len && k<3;j++,k++)
                row.push(<ComponentButton name={this.props.values[j]}></ComponentButton>);
            rows.push(<ReactBootstrap.Row className = "justify-content-center">{row}</ReactBootstrap.Row>);
        }
        
        return (
            <div className = "section">
                <SectionCollapseButton name={this.props.name} 
                                        onClick = {this.handleExpansion}
                />
                <ReactBootstrap.Collapse in={this.state.isExpanded}>
                    <ReactBootstrap.Container id={this.props.name}>{rows}</ReactBootstrap.Container>
                </ReactBootstrap.Collapse>
            </div>
        )
    }
}

export default UIComponentSection;