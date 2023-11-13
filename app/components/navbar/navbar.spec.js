import { Navbar } from "./Navbar";
import { render as rtlRender, screen } from "@testing-library/react";

let mockData = [
  { label: "About", href: "#about", id: 1 },
  { label: "Experience", href: "#experience", id: 2 },
  { label: "Projects", href: "#projects", id: 3 },
  { label: "Contact", href: "#contact", id: 4 },
];

const render = (data = { mockData }) => {
  return rtlRender(<Navbar data={data} />);
};

describe("Navbar", () => {
  it("should render navbar links if provided", () => {
    render();
    expect(screen.getByTestId("About")).toBeInTheDocument();
    expect(screen.getByTestId("Experience")).toBeInTheDocument();
    expect(screen.getByTestId("Projects")).toBeInTheDocument();
    expect(screen.getByTestId("Contact")).toBeInTheDocument();
  });

  it("should highlight the section with contentID when passed into url", () => {
    render();
  });

  it("should not render anything if no data is provided", () => {
    render(undefined);
    expect(screen.queryByTestId("navbar-container")).not.toBeInTheDocument();
  });
});
