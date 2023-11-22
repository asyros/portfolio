import { Experience } from "./Experience";
import { render as rtlRender, screen } from "@testing-library/react";

let mockData = {
  heading: "EXPERIENCE",
  sections: [
    {
      fromDate: "",
      toDate: "",
      currentlyWorking: false,
      description: "",
      company: "",
      key: "",
    },
  ],
};

const render = (data = mockData) => {
  return rtlRender(<Experience data={data} />);
};

describe("Experience", () => {
  it("should render", () => {
    render();
  });

  it("should not render", () => {
    render(null);
  });
});
