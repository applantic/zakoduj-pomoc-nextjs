import Link from "next/link";
import Image from "next/image";

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
    <section>
      <h2>{title}</h2>
      <div>
        <div>
          <Image
            src={image}
            alt={"Image of project"}
            width={450}
            height={350.42}
          ></Image>
        </div>
        <div>
          <div>
            <p>Ciągle rozwijamy ten projekt</p>
            <Link href={link}>chcesz pomóc?</Link>
            <span> 🤗</span>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </section>
  );
};
