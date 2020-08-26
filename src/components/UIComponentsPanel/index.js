import React from 'react'
import UIComponentSection from './UIComponentSection'

class UIComponentsPanel extends React.Component {
    render() {
        const sections = [];
        const iter = this.props.sections;
        for (const key in iter) {
            if (iter.hasOwnProperty(key)) {
                sections.push(<UIComponentSection key={key} name={key} values={iter[key]}></UIComponentSection>)
            }
        }

        return (
            <>
                {sections}
            </>
        )
    }
}

export default UIComponentsPanel;