import React from 'react'

export default class PropsPanel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        var panelData = this.props.element;
        var ele ;
        if(panelData.element.id1 !== -1){
            // display element props
        }
        else{
            ele =<label>{ panelData.default }</label>
        }

        return <div>{ele}</div>
    }
}