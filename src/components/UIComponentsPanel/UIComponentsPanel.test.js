import React from 'react';
import UIComponentPanel from '.';
import TestRenderer from 'react-test-renderer';

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
        name : "Others",
        values : [
            "A",
            "B"
        ]
    }
}

test("show/hide components when section is clicked", ()=> {
    const comp = TestRenderer.create(
        <UIComponentPanel sections={vals} />,
    );
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();

//     tree.props.handleExpansion();
//     tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
});