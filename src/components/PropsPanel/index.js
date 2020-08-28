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
    //const row= [];
    let ele = DisplayProp[tag];
    var load = [];
    for (var get in ele) {
      const options = [];
      let def = this.props.attr[get];

      // console.log(def)
      for (var inner in ele[get]) {
        let iterate = ele[get][inner];
        for (var index in iterate) {
          if (def !== "undefined" && iterate[index] === def) {
            options.push(<option>{iterate[index]}</option>);
          } else {
            options.push(<option>{iterate[index]}</option>);
          }
        }
      }

      load.push(
        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <Form.Label>{get}</Form.Label>
          <Form.Control as="select" size="sm" defaultValue={def} custom>
            {options}
          </Form.Control>
        </Form.Group>
      );
    }
    return <>{load}</>;
  }
}

export default PropsPanel;
