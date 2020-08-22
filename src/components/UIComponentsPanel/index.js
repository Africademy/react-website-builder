import React from 'react'
import Container from 'react-bootstrap/Container';
import UIComponentSection from './UIComponentSection'

class UIComponentsPanel extends React.Component{
    render(){
        const sections = [];
        Object.keys(this.props.sections).forEach(([name,values]) => {
            sections.push(<UIComponentSection name={name} values={values}></UIComponentSection>)
        });

        return (
            <Container className="panel">
                {sections}
            </Container>
        )
    }
}

export default UIComponentsPanel;