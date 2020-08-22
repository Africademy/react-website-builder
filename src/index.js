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
            "C"
        ]
    },
    section2 : {
        name : "Comps",
        values : [
            "A",
            "B"
        ]
    }
}

ReactDOM.render(<App sections={vals} />, document.getElementById("root"));