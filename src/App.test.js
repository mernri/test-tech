import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

/* 
Unit test: Testing one isolated function, or one React component. 
Enzyme’s shallow() is a unit test.

Integration test: Testing a multitude of functions working together, 
or an entire React component including children components. 
Enzyme’s mount() is an integration test.

Mock function: Redefining a function specifically for a test to generate a result. 
E.g. returning hard-coded data instead of relying on fetch requests or database calls. 
This strategy could prevent the hard-coded sum issue we were discussing earlier!
Mock functions can be defined in jest with jest.fn(() => { //function here });
*/

describe("Testing App Compoment with Enzyme", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot()
  });
});
