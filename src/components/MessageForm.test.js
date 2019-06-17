import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MessageForm from "./MessageForm";

Enzyme.configure({ adapter: new Adapter() });

describe("MessageForm", () => {
  it("should be true", () => {
    const foo = true;
    expect(foo).toBe(true);
  });
});
