type ProjectData = {
  heading: string;
  projects: Array<ProjectSectionData>;
};

type ProjectSectionData = {
  id: number;
  poster: string;
  downloadUrl: string;
  name: string;
};

export default function Projects(data: ProjectData) {
  const { heading, projects } = data;

  if (data) {
    return (
      <div id="projects" data-test-id="projects-container">
        <div className="mt-20">
          <div className="w-1/2	m-auto">
            {heading && (
              <p
                className="font-mono text-3xl mb-6"
                data-test-id="projects-heading"
              >
                {heading}
              </p>
            )}
            {projects?.length &&
              projects.map(
                ({ id, poster, downloadUrl, name }: ProjectSectionData) => (
                  <div key={id}>
                    {poster && <img src={poster} href={downloadUrl} />}
                    {name && (
                      <p
                        className="font-serif text-md mb-3"
                        data-test-id={`projects.${name}`}
                      >
                        {name}
                      </p>
                    )}
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
