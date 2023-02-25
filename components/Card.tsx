import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface CardProps {
  title: string;
  active: boolean;
  image: string;
  description: string;
  link: string;
}

export const Card = ({
  title,
  active,
  image,
  description,
  link,
}: CardProps) => {
  
  return (
    <section className="max-w-3xl">
      <h2 className="text-indigo-900 font-semibold text-lg my-4 mx-6 md:mx-0 md:mb-0 md:mt-8">{title}</h2>
      <div className="flex bg-gradient-to-br from-purple-200 via-indigo-100 shadow-lg rounded-lg">
        <div className="w-max">
          <img
            src={image}
            alt={"Image of project"}
            width={350}
            height={250.42}
            className="shadow-lg rounded-sm"
          ></img>
        </div>
        <article className="prose px-4 my-1 max-w-sm">
        <ReactMarkdown className="">{description}</ReactMarkdown>
        </article>
      </div>
    </section>
  );
};
