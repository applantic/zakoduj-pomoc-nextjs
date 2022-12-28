import Image from "next/image";

const Home = () => {
  return (
    <main className="flex-grow flex justify-center items-end">
      <section>
        <div>
          <h1>Budujemy software dla&nbsp;fundacji charytatywnych</h1>
          <p>
            Nasi wolontariusze pracują ciężko, <br />
            żebyście Wy mogli pracować lżej
          </p>
        </div>
        <Image
          src="/../public/laptop.png"
          alt={"Example image"}
          width={100}
          height={100}
        ></Image>
      </section>
      <section>
        <Image
          src="/../public/calender.png"
          alt={"Example image"}
          width={100}
          height={100}
        ></Image>
        <div>
          <h2>Potrzebujesz Pomocy?</h2>
          <p>
            Skontaktuj sie z nami. Opisz nam swój problem i jeśli będziemy w
            stanie pomóc, umówimy się na spotkanie.
          </p>
          <button>klik!</button>
        </div>
      </section>
      <section>
        <div>
          <h2>Zobacz nasze projekty.</h2>
          <p>
            Do każdego projektu podchodzimy indywidualnie. Skupiamy się na
            rozwiazywaniu problemów i przejrzystym designie.
          </p>
          <button>klik!</button>
        </div>
        <Image
          src="/../public/folder.png"
          alt={"Example image"}
          width={100}
          height={100}
        ></Image>
      </section>
    </main>
  );
};

export default Home;
