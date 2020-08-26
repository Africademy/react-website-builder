import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// UI components properties - RightPanel
import properties from './properties.json';

//import UIComponentsPanel from './components/UIComponentsPanel';

ReactDOM.render(<App sections={properties.sections} tools={properties.tools} />, document.getElementById("root"));