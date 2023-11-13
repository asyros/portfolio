import { Projects } from "./Projects";
import { render as rtlRender, screen } from "@testing-library/react";

let mockData = {
  heading: "Projects",
  projects: [
    {
      id: 1,
      poster: "testPosterHref",
      downloadUrl: "testDownloadUrl",
      name: "testName1",
    },
  ],
};

const render = (data = { mockData }) => {
  return rtlRender(<Projects data={data} />);
};

describe("Projects", () => {
  it("correctly renders projects", () => {
    render();
    expect(screen.queryByTestId("projects-heading")).not.toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByTestId("projects.testName1")).toBeInTheDocument();
  });

  it("doesnt render anything if no data provided", () => {
    render(null);
    expect(screen.queryByTestId("projects-container")).not.toBeInTheDocument();
  });
});
