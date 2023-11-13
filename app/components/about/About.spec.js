import { About } from "./About";
import { render as rtlRender, screen } from "@testing-library/react";

let mockData = {
  heading: "About",
  content: ["test content"],
};

const render = (data = mockData) => {
  return rtlRender(<About data={data} />);
};

describe("About", () => {
  it("should ", () => {});
});
