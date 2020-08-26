import React from 'react'
const { Button } = require("react-bootstrap");

class ComponentButton extends React.Component{
    constructor(props){
        super(props);

        this.dragstart_handler = this.dragstart_handler.bind(this);
    }

    dragstart_handler(e){
        console.log("dragged")
        e.dataTransfer.setData("text/plain", e.target.id);
        var j = JSON.stringify({name: this.props.name, attr: this.props.attr})
        e.dataTransfer.setData("text/html", j);
    }

    render(){
        return <Button className="m-2" 
                       draggable="true" 
                       onDragStart={this.dragstart_handler} 

                       variant="outline-success">{this.props.name}</Button>
    }
}

export default ComponentButton;