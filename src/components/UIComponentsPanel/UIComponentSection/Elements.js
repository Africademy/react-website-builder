import React from "react";
const { Button } = require("react-bootstrap");

class Elements extends React.Component {
  constructor(props) {
    super(props);

    this.dragstart_handler = this.dragstart_handler.bind(this);
  }

  dragstart_handler(e) {
    e.dataTransfer.setData("elementId", e.target.id);
    var attr = JSON.stringify(this.props.attr);
    e.dataTransfer.setData("attributes", attr);
  }

  render() {
    return (
      <Button
        className="m-2"
        draggable="true"
        onDragStart={this.dragstart_handler}
        variant="outline-success"
      >
        {this.props.name}
      </Button>
    );
  }
}

export default Elements;
