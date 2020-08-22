import React from 'react'
const { Button } = require("react-bootstrap");

class ComponentButton extends React.Component{
    render(){
        return <Button className="m-2" variant="outline-success">{this.props.name}</Button>
    }
}

export default ComponentButton;