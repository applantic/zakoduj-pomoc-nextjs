import { InferGetStaticPropsType } from "next";
import { Card } from "../components/Card";
import { GetAllProductsDocument, GetAllProductsQuery } from "../generated/gql/graphql";
import { apolloClient } from "../graphql/apolloClient";


const Projects = ({data}:InferGetStaticPropsType<typeof getStaticProps>) => {
  
  
  const cards = data.projects.map(item => {
    return (
        <Card
          key={item.id}
          title={item.title}
          active={item.active}
          image={item.image.url}
          description={item.description}/>
    )
})        

  return (
    <div className="bg-slate-50 w-screen max-h-fit flex flex-col items-center pb-10">
      <h1 className="text-3xl text-indigo-900 font-semibold my-4 mx-6 sm:mx-0 lg:my-4">
        Projekty
      </h1>
      <p className="text-lg text-indigo-900 my-0 mx-6 md:text-sm sm:mx-0 lg:my-0">oto lista projektów:</p>
      {cards}
    </div>
  );
};

export default Projects;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetAllProductsQuery>({
    query: GetAllProductsDocument
  });
  
  return {
    props: {
      data,
    }
  }
}
