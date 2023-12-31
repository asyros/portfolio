import Navbar from "../../components/navbar/navbar";
import { data } from "./data";

export default function About() {
  if (data) {
    const { heading, content } = data;

    return (
      <div id="about">
        <div className="mt-20">
          <div className="w-1/2	m-auto">
            {heading && <p className="font-mono text-3xl mb-6">{heading}</p>}
            {content &&
              content.map((paragraph: string, index: number) => (
                <p key={index} className="font-serif text-md mb-3">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>
    );
  } else return null;
}
