import React from 'react'
import './WebPreviewArea.css'

class WebPreviewArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.dragover_handler = this.dragover_handler.bind(this);
        this.drop_handler = this.drop_handler.bind(this);
        this.dropped = "";
    }

    drop_handler(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text/html");
        data = JSON.parse(data);
        var ele = React.createElement(data.name,{className:"btn btn-primary"},data.val)
        console.log(typeof this.state.data)
        this.setState((state,props) => ({
            data: [...state.data,ele]
        }));
    }

    dragover_handler(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }

    render() {
        console.log(this.state)
        return (
            (<div id="prev"
            className="dragArea"
            onDrop={this.drop_handler}
            onDragOver={this.dragover_handler}>
            <div id="addContent">{this.state.data}</div>
        </div>
        )
        )
    }
}

export default WebPreviewArea;