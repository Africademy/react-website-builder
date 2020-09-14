import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import UIComponentsPanel from "./components/UIComponentsPanel";
import WebPrevArea from "./components/WebPrevArea";
import PropsPanel from "./components/PropsPanel";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      webprev: {
        update: {
          isUpdated: true,
          updatingId: -1,
        },
        elements: {}
      },
      propspanel: {
        default: "Click on an element to update it",
        element: {
          id1:-1,
          id2:-1,
          ele: {}
        }
      }
    }

    this.webAppDropHandler = this.webAppDropHandler.bind(this);
    this.webAppOnClickHandler = this.webAppOnClickHandler.bind(this);
    this.webAppUpdateHandler = this.webAppUpdateHandler.bind(this);
    this.webAppResetUpdateHandler = this.webAppResetUpdateHandler.bind(this);
  }

  /*
  dropping elements from UIComponentPanel 
  and updating the state 
  */
  webAppDropHandler(ele){
    var id = Object.keys(this.state.webprev.elements).length;
    var elements = this.state.webprev.elements;
    this.setState((state)=> ({
      // update: {
      //   isUpdated: false,
      //   updatingId: id
      // },
      webprev: {
        ...state.webprev,
        elements: {
          ...elements,
          [id] : ele
        }
      }
    }));
  }
/*
  on click event , updating the propspanel state
  for the clicked element 
  // id1: parent element id in this.state.webprev.elements
  // id2: child element id inside this.state.webprev.elements[id1] 
  */
  webAppOnClickHandler(id1,id2){
    var ele = this.state.webprev.elements[id1][id2]
    this.setState({
      propspanel: {
        id1: id1,
        id2: id2,
        ele: ele
      }
    });
  }

  /*
  updating the changes in element incoming from 
  propspanel into the state and marking isUpdated boolean.
  // id1: parent element id in this.state.webprev.elements
  // id2: child element id inside this.state.webprev.elements[id1] 
  */
  webAppUpdateHandler(id1,id2,ele){
    var elements = this.state.webprev.elements;
    var nested = elements[id1]
    this.setState((state)=>({
      webprev: {
        elements: {
          ...elements,
          [id1] : {
            ...nested,
            [id2] : ele
          }
        },
        update: {
          isUpdated: false,
          updatingId: id1,
        },
      }
    }));
  }

  /*
  updating the isUpdate boolean to default 
  inorder to avoid un-necessary re-rendering of
  updated element.
  */
  webAppResetUpdateHandler(){
    this.setState((state) => ({
      webprev: {
        ...state.webprev,
        update: {
          isUpdated: true,
          updatingId:-1,
        }
      }
    }));
  }

  render() {
    return (
      <>
      <UIComponentsPanel></UIComponentsPanel>
      <WebPrevArea webAppDropHandler={this.webAppDropHandler}
                   webAppOnClickHandler={this.webAppOnClickHandler}
                   webAppResetUpdateHandler={this.webAppResetUpdateHandler}
                   update={this.state.webprev.update}
                   allElements={this.state.webprev.elements}
                   >
      </WebPrevArea>
      <PropsPanel element={this.state.propspanel}></PropsPanel>
      </>
    )
  }
}

export default App;
