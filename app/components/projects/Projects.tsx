import { data } from "./data";

export default function Projects() {
  const { heading, content } = data;

  if (data) {
    return (
      <div id="projects">
        <div className="mt-20">
          <div className="w-1/2	m-auto">
            {heading && <p className="font-mono text-3xl mb-6">{heading}</p>}
            {content && <p className="font-serif text-md mb-3"></p>}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
