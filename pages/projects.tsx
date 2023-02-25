import { Card } from "../components/Card";
import projectdetails from "../content/projectdetails";

const Projects = () => {
  const cards = projectdetails.map(item => {
    return (
        <Card
            key={item.id}
            title={item.title}
            active={item.active}
            image={item.image}
            description={item.description}
            link={item.link}
        />
    )
})        

  return (
    <div className="bg-slate-50 px-36 w-full max-h-fit">
      <div className="flex flex-col items-center mb-10">
      <h1 className="text-3xl text-indigo-900 font-semibold my-4 mx-6 sm:mx-0 lg:my-4">
        Projekty
      </h1>
      <p className="text-lg text-indigo-900 my-0 mx-6 sm:mx-0 lg:my-0">oto lista projektów:</p>
      {cards}
      </div>
    </div>
  );
};

export default Projects;
