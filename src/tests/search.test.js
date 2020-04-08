import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount, configure } from "enzyme";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
configure({ adapter: new Adapter() });
import Search from "../components/search.js";
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});
it("Input search text", () => {
  const onSearchMock = jest.fn();
  const wrapper = mount(<Search onChange={onSearchMock} />);

  expect(
    wrapper
      .find("input")
      .at(0)
      .prop("value")
  ).toEqual("");
  wrapper
    .find("input")
    .at(0)
    .simulate("change", { target: { value: "Hello World" } });
  console.log(wrapper.find("input").state().text);

  expect(
    wrapper
      .find("input")
      .at(0)
      .prop("value")
  ).toEqual("Hello World");
});
