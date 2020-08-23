import React from 'react';
import UIComponentSection from '.';
import Adapter from 'enzyme-adapter-react-16';
import { shallow,configure  } from 'enzyme';

const vals = {
    section1: {
        name: "Comps",
        values: [
            "A",
            "B",
            "C",
            "A",
            "B",
            "C"
        ]
    },
    section2: {
        name: "Others",
        values: [
            "A",
            "B"
        ]
    }
}
configure({adapter: new Adapter()});

test("show/hide components when section is clicked", () => {
    for (const key in vals) {
        if (vals.hasOwnProperty(key)) {
            const tree = shallow(
                <UIComponentSection key={vals[key].name} name={vals[key].name} values={vals[key].values}></UIComponentSection>
            );
            // let tree = comp.toJSON();
            // expect(tree).toMatchSnapshot();
            
            tree.find('SectionCollapseButton').prop('onClick')()
            expect(tree).toHaveBeenCalled();
        }
    }
});