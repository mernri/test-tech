import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MessageForm from "./MessageForm";

Enzyme.configure({ adapter: new Adapter() });

describe("MessageForm tests", () => {
  // Test if the message content changes
  it("should capture the content of the message on change", () => {
    const component = mount(<MessageForm />);
    const input = component.find({ name: "content" });
    input.instance().value = "je suis un message";
    input.simulate("change");
    expect(component.state().content).toEqual("je suis un message");
  });

  // Test if the visibility is set to "public" when the user checks the "public" option
  it("should set the visibility to 'public' on click on 'public'", () => {
    const component = mount(<MessageForm />);
    const radio = component.find({ name: "visibility" }).at(0);
    radio.instance().checked = "false";
    radio.simulate("change");
    expect(component.state().visibility).toEqual("public");
  });

  // Test if the visibility is set to "privé" when the user checks the "privé" option
  it("should set the visibility to 'privé' on click 'privé'", () => {
    const component = mount(<MessageForm />);
    const radio = component.find({ name: "visibility" }).at(1);
    radio.instance().checked = "false";
    radio.simulate("change");
    expect(component.state().visibility).toEqual("privé");
  });

  // Test if the submit button is calling the addMessage function
  it("should submit the form on click", () => {
    const addMessage = jest.fn();
    const component = mount(<MessageForm addMessage={addMessage} />);
    component.find("form").simulate("submit");
    expect(addMessage).toHaveBeenCalled();
  });

  // // Test if the content input and visibility radio button are cleared after the form has been submitted
  it("should clear the inputs after submission", () => {
    const addMessage = jest.fn();
    const component = mount(<MessageForm addMessage={addMessage} />);
    component.find("form").simulate("submit");
    expect(component.state().content).toEqual("");
    expect(component.state().visibility).toEqual("");
  });
});
