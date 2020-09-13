import React from "react";
import "./WebPreviewArea.css";

// TODO: copulate the data in on_click()
//try to parse and get data from handleClick() callback ()
// in propsPanel Component.
class WebPreviewArea extends React.Component {
  constructor(props) {
    super(props);
    this.dragover_handler = this.dragover_handler.bind(this);
    this.drop_handler = this.drop_handler.bind(this);
    this.on_click = this.on_click.bind(this);
    this.drag_start = this.drag_start.bind(this);
    this.fetch = this.fetch.bind(this);

    this.key = 0;
    this.elems = [];
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
    this.props.handleClick(attrObj);
  }

  componentDidMount() {
    // set height in pixels after element is scaled to 100% of height, for adding scrollbar
    var e = document.getElementById("prev");
    var h = e.clientHeight;
    e.style.height = h + "px";
  }
  drag_start(e) {}

  drop_handler(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("attributes");
    console.log("this is data " + data);
    data = JSON.parse(data);

    var ele = React.createElement(
      data.tag,
      {
        ...data,
        onClick: this.on_click,
        onDragStart: this.drag_start,
        id: this.key,
        key: this.key++
      },
      data.content
    );

    var obj = {
      [this.state_key++]: {
        ...data,
        tag: data.tag,
        element: ele
      }
    };
    this.props.change(obj);
  }

  dragover_handler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  fetch() {
    for (var first_ind in this.props.elems) {
      for (var second_ind in this.props.elems[first_ind]) {
        if (second_ind === "element") {
          this.elems.push(this.props.elems[first_ind][second_ind]);
        }
      }
    }

    return this.elems;
  }

  render() {
    return (
      <div
        id="prev"
        className="dragArea"
        onDrop={this.drop_handler}
        onDragOver={this.dragover_handler}
      >
        {this.fetch()}
      </div>
    );
  }
}

export default WebPreviewArea;
