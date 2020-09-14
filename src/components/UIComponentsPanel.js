import React from 'react'
import { Button } from 'react-bootstrap';
import components from './components.json'

export default class UIComponentsPanel extends React.Component{
    constructor(props){
        super(props);
        this.elements = []

        this.dragStartHandler = this.dragStartHandler.bind(this);
        for(const i of Object.keys(components)){
            this.elements.push(
                <Button
                    key={i}
                    draggable="true" 
                    onDragStart={this.dragStartHandler.bind(null,i)}
                >
                {i}</Button>
            )
        }
    }

    dragStartHandler(ele,e){
        e.dataTransfer.setData("element",ele)
    }

    render(){
        return this.elements;
    }
}