import React from 'react'
import { Button } from 'react-bootstrap'

class SectionCollapseButton extends React.Component{
    render(){
        return (
            <Button block 
                    className = 'section-btn'
                    aria-controls={this.props.name} 
                    aria-expanded={true}
                    onClick = {this.props.onClick}>
                    {this.props.name}
            </Button>
        )
    }
}

export default SectionCollapseButton;