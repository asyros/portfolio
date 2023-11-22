import { Contact } from "./Contact";
import { render as rtlRender, screen } from "@testing-library/react";

let mockData = {
  heading: "Contact",
};

const render = (data = mockData) => {
  return rtlRender(<Contact data={data} />);
};

describe("Contact", () => {
  it("should render contact form", () => {
    render();
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("shouldnt render contact form", () => {
    render(null);
    expect(screen.getByTestId("contact-form")).not.toBeInTheDocument();
  });

  it("stores userDetails", () => {
    render();
  });
});
