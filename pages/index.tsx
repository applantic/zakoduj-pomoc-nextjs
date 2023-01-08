import Image from "next/image";
import { Button } from "../components/Button";

const Home = () => {
  return (
    <main className="my-0 mx-5 max-w-5xl">
      <section className="text-indigo-900 flex items-start pt-8 lg:pt-12">
        <div className="flex flex-col justify-center mb-2.5 max-w-lg">
          <h1 className="text-indigo-900 font-semibold text-3xl leading-8 mx-0 my-2 lg:text-5xl lg:leading-tight">
            Budujemy software dla&nbsp;fundacji charytatywnych
          </h1>
          <p className="text-slate-500 text-base font-medium mt-4 mb-4 mx-0 lg:text-xl lg:m-1.5">
            Nasi wolontariusze pracują ciężko, <br />
            żebyście Wy mogli pracować lżej
          </p>
        </div>
        <Image
          src="/../public/laptop.png"
          alt={"Laptop image"}
          width={500}
          height={446.43}
          className="hidden my-4 mx-8 absolute max-w-xs lg:inline lg:static lg:z-auto lg:max-w-lg"
        ></Image>
      </section>
      <section className="flex relative lg:h-auto">
        <Image
          src="/../public/calender.png"
          alt={"Calendar image"}
          width={450}
          height={350.42}
          className="hidden my-4 mx-8 absolute lg:inline lg:static lg:z-auto lg:pr-5 lg:max-w-md"
        ></Image>
        <div className="flex flex-col justify-center mb-2.5 max-w-lg">
          <h2 className="text-indigo-900 font-semibold text-2xl mx-0 my-px lg:text-4xl lg:mx-0 lg:my-1">
            Potrzebujesz Pomocy?
          </h2>
          <p className="text-slate-500 text-base font-medium mt-1 mb-4 mx-0 lg:text-xl lg:m-1.5">
            Skontaktuj sie z nami. Opisz nam swój problem i jeśli będziemy w
            stanie pomóc, umówimy się na spotkanie.
          </p>
          <Button link="./contact" message="Dowiedz się więcej" />
        </div>
      </section>
      <section className="flex relative lg:h-auto">
        <div className="flex flex-col justify-center mb-2.5 max-w-lg">
          <h2 className="text-indigo-900 font-semibold text-2xl leading-5 mx-0 my-1 lg:text-4xl">
            Zobacz nasze projekty.
          </h2>
          <p className="text-slate-500 text-base font-medium mt-1 mb-4 mx-0 lg:text-xl lg:m-1.5">
            Do każdego projektu podchodzimy indywidualnie. Skupiamy się na
            rozwiazywaniu problemów i przejrzystym designie.
          </p>
          <Button link="./projects" message="Dowiedz się więcej" />
        </div>
        <Image
          src="/../public/folder.png"
          alt={"Folder image"}
          width={430}
          height={394.79}
          className="hidden my-4 mx-8 max-w-xs absolute lg:inline lg:static lg:z-auto lg:max-w-md"
        ></Image>
      </section>
    </main>
  );
};

export default Home;
