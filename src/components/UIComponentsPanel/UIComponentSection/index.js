import React from "react";
import SectionCollapseButton from "./SectionCollapseButton";
import * as ReactBootstrap from "react-bootstrap";
import "./UIComponentSection.css";
import Elements from "./Elements";
import Components from "./Components";
class UIComponentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: true };
    this.handleExpansion = this.handleExpansion.bind(this);
  }

  handleExpansion(e) {
    this.setState((state) => ({ isExpanded: !state.isExpanded }));
  }

  render() {
    const rows = [];
    const values = this.props.values;

    const types = {
      elements: Elements,
      components: Components
    };

    for (let vals in values) {
      if (values.hasOwnProperty(vals)) {
        const Name = types[this.props.name];
        rows.push(
          <ReactBootstrap.Row key={vals} className="justify-content-center">
            <Name name={vals} attr={values[vals]} />
          </ReactBootstrap.Row>
        );
      }
    }

    return (
      <div className="section">
        <SectionCollapseButton
          name={this.props.name}
          onClick={this.handleExpansion}
        />
        <ReactBootstrap.Collapse in={this.state.isExpanded}>
          <ReactBootstrap.Container id={this.props.name}>
            {rows}
          </ReactBootstrap.Container>
        </ReactBootstrap.Collapse>
      </div>
    );
  }
}

export default UIComponentSection;
