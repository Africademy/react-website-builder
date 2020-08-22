import React from 'react'
const { Button } = require("react-bootstrap");

class ComponentButton extends React.Component{
    render(){
        return <Button>{this.props.name}</Button>
    }
}

export default ComponentButton;