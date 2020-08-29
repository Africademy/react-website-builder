import React from "react";
import "./PropsPanel.css";
import DisplayProp from "../../props.json";
import { Form } from "react-bootstrap";
class PropsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.variable = "this";
  }
  render() {
    var tag = this.props.attr.tag;
    var id = this.props.attr.id;
    console.log("current element tag is " + tag);
    console.log("current element id is " + id);

    //const row= [];
    let ele = DisplayProp[tag];
    console.log("current element is " + JSON.stringify(ele));
    var load = [];
    for (var get in ele) {
      const options = [];
      let def = this.props.attr[get];
      console.log("default element is " + def);

      // console.log(def)
      for (var inner in ele[get]) {
        let iterate = ele[get][inner];
        for (var index in iterate) {
          if (def !== "undefined" && iterate[index] === def) {
            options.push(<option key={index}>{iterate[index]}</option>);
          } else {
            options.push(<option>{iterate[index]}</option>);
          }
          console.log("these are values : " + iterate[index].toString());
        }
      }

      load.push(
        <Form.Group controlId={id}>
          <Form.Label>{get}</Form.Label>
          <Form.Control as="select" size="sm" defaultValue={def} custom>
            {options}
          </Form.Control>
        </Form.Group>
      );
    }
    return (
      <div class="PropsPanel">
        <p>Properties</p>
        {load}
      </div>
    );
  }
}

export default PropsPanel;
