import React from 'react'
import { createElement } from './ElementCreator'
import components from './components.json'

export default class WebPrevArea extends React.Component {
    constructor(props) {
        super(props)

        // Array of JSX elements
        this.elements = []

        this.dropHandler = this.dropHandler.bind(this);
        this.dragOverHandler = this.dragOverHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    dragOverHandler(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    dropHandler(e) {
        e.preventDefault();
        var ele = e.dataTransfer.getData("element");
        ele = components[ele]
        var id = this.elements.length;
        this.elements.push(createElement(ele, this.onClickHandler.bind(null,id)))
        this.props.webAppDropHandler(ele);
    }

    onClickHandler(id1,id2,e){
        e.preventDefault();
        this.props.webAppOnClickHandler(id1,id2);
    }

    render() {
        var update = this.props.update;
        if(!update.isUpdated){
            var elements = this.props.allElements;
            var updatedEle = createElement(elements[update.updatingId]);
            this.elements[update.updatingId] = updatedEle;
            this.props.webAppResetUpdateHandler();
        }
        return (
            <div
                onDrop = {this.dropHandler}
                onDragOver = {this.dragOverHandler}
                style={{height:600+"px",width:"1000px"}}
            >
                {this.elements}
            </div>
        );
    }
}