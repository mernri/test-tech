import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MessageList from "./MessageList";

Enzyme.configure({ adapter: new Adapter() });

describe("MessageList tests", () => {
  it("should display the list of messages", () => {
    const messages = [
      { id: 1, content: "je suis un message", visibility: "public" },
      { id: 2, content: "bonjour bonjour !", visibility: "privé" },
      { id: 3, content: "cool cool cool", visibility: "public" }
    ];
    const component = shallow(<MessageList messages={messages} />);

    // Check if there's the right number of messages
    expect(component.find(".one-message")).toHaveLength(messages.length);

    // Check if a message in the component exists
    expect(
      component.contains(
        <li className="one-message">
          <p className="content">
            <strong>je suis un message</strong>
          </p>
          <p className="visibility">public</p>
        </li>
      )
    ).toBeTruthy();
  });
});
