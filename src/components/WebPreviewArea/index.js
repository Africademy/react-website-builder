import React from "react";
import "./WebPreviewArea.css";

//web-preview area for display of all state elements.
class WebPreviewArea extends React.Component {
  constructor(props) {
    super(props);
    //bindings of drag,drop and onclick events.
    this.dragover_handler = this.dragover_handler.bind(this);
    this.drop_handler = this.drop_handler.bind(this);
    this.on_click = this.on_click.bind(this);
    this.drag_start = this.drag_start.bind(this);

    //elements array for rendering all elements from state for
    //dispaying them on preview-area.
    this.elems = [];
    //giving keys to the elements. that are stored in state.
    this.state_key = 0;
  }

  on_click(e, data) {
    /*extracting the required attributes from DOM attributes
     and storing it in object and throwing it in callback(). */
    var attrObj = {};
    for (var j in e.target.attributes) {
      if (e.target.attributes.hasOwnProperty(j)) {
        var key = e.target.attributes[j].nodeName;
        var value = e.target.attributes[j].nodeValue;
        attrObj[key] = value;
      }
    }
    console.log(attrObj);
    //trigger call back to state change.
    this.props.propPanel(attrObj);
  }

  componentDidMount() {
    // set height in pixels after element is
    // scaled to 100% of height, for adding scrollbar
    var e = document.getElementById("prev");
    var h = e.clientHeight;
    e.style.height = h + "px";
  }
  drag_start(e) {}

  drop_handler(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("attributes");
    //console.log("this is data " + data);
    data = JSON.parse(data);
    //creating react element.
    console.log(this.props.elems);
    var ele = React.createElement(
      data.tag,
      {
        ...data,
        onClick: this.on_click,
        onDragStart: this.drag_start
      },
      data.content
    );
    //creating object for storing in state.
    var obj = {
      [this.state_key++]: {
        ...data,
        tag: data.tag
      }
    };
    this.elems.push(ele);
    this.props.change(obj);
  }

  dragover_handler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  render() {
    return (
      <div
        id="prev"
        className="dragArea"
        onDrop={this.drop_handler}
        onDragOver={this.dragover_handler}
      >
        {this.elems}
      </div>
    );
  }
}

export default WebPreviewArea;
