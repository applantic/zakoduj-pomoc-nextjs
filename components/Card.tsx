import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface CardProps {
  title: string;
  active: boolean;
  image: string;
  description: string;
}

export const Card = ({
  title,
  active,
  image,
  description,
}: CardProps) => {
  
  return (
    <section className="max-w-5xl">
      <h2 className="text-indigo-900 text-xl font-semibold my-4 mx-6 md:text-2xl md:mx-0 md:mb-0 md:mt-8">{title}</h2>
      <div className="md:flex bg-gradient-to-br from-purple-200 via-indigo-100 shadow-lg rounded-lg">
        <div className="w-full">
          <img
            src={image}
            alt={"Image of project"}
            className="shadow-lg rounded-sm"
          ></img>
        </div>
        <article className="prose px-4 my-3 max-w-sm">
        <ReactMarkdown className="">{description}</ReactMarkdown>
        </article>
      </div>
    </section>
  );
};
