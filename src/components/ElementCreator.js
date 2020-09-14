import React from 'react'
import * as ReactBootstrap from 'react-bootstrap';

var processed = {}

var components = {
    Navbar : ReactBootstrap.Navbar,
    Navbar_Collapse: ReactBootstrap.Navbar.Collapse,
    Nav : ReactBootstrap.Nav,
    Nav_Link : ReactBootstrap.Nav.Link,
    NavDropdown : ReactBootstrap.NavDropdown,
    Navbar_Brand: ReactBootstrap.Navbar.Brand,
    Navbar_Toggle: ReactBootstrap.Navbar.Toggle,
}

function process(o,og,key,onClick){
    var ele = components[o.ele]
    var nested = [] 
    for(const i of o.nested){
        nested.push(process(og[i] ,og,i,onClick));
        processed[i] = true
    }
    o.attributes["key"] = key
    if(o.attributes["onClick"] === null){
        o.attributes["onClick"] = onClick.bind(null,key);
    }
    return React.createElement(ele,o.attributes,nested,o.text);
}

export function createElement(o,onClick){
    var ele = []
    for(var key of Object.keys(o)){
        if(processed[key] === undefined){
            processed[key] = true
            ele.push(process(o[key],o,key,onClick))
        }
    }
    processed = {}
    return ele
}

