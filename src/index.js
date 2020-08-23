import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import UIComponentsPanel from './components/UIComponentsPanel';

const vals = {
    section1 : {
        name : "Comps",
        values : [
            "A",
            "B",
            "C",
            "A",
            "B",
            "C",
            "E"
        ]
    },
    section2 : {
        name : "Others",
        values : [
            "A",
            "B"
        ]
    }
}

const names = [
    { name: "first_prop" },
    { name: "second_prop" },
    { name: "third_prop" },
    { name: "fourth_prop" }
  ];

ReactDOM.render(<App sections={vals} names={names} />, document.getElementById("root"));