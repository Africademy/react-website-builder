import React from 'react';
import ReactDOM from 'react-dom';
import UIComponentsPanel from './components/UIComponentsPanel';

const vals = {
    section1 : {
        name : "Comps",
        values : [
            "A",
            "B"
        ]
    }
}

ReactDOM.render(<UIComponentsPanel sections={vals} />, document.getElementById("root"));