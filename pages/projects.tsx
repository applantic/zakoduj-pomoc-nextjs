import { Card } from "../components/Card";

const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen bg-teal-50">
      <h1>Projekty</h1>
      <p>oto lista projektów:</p>
      <br />
      <Card
        title={"Geeks 4 teachers"}
        active={false}
        image={"/../public/geeks.jpg"}
        description={"Geeks description"}
        link={
          "https://outride.rs/en/a-group-of-polish-computer-programmers-want-to-help-teachers-work-remotely/"
        }
      />
    </div>
  );
};

export default Projects;
