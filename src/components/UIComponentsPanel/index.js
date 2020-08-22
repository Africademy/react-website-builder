import React from 'react'
import UIComponentSection from './UIComponentSection'

class UIComponentsPanel extends React.Component {
    render() {
        const sections = [];
        const iter = this.props.sections;
        for (const key in iter) {
            if (iter.hasOwnProperty(key)) {
                console.log(key,iter[key])
                sections.push(<UIComponentSection name={iter[key].name} values={iter[key].values}></UIComponentSection>)
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