import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MessageList from "./MessageList";

Enzyme.configure({ adapter: new Adapter() });

describe("MessageList tests", () => {
  it("should be true", () => {
    const foo = true;
    expect(foo).toBe(true);
  });
});
