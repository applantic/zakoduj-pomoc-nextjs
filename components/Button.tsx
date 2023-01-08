import Link from "next/link";

interface ButtonProps {
  link: string;
  message: string;
}

export const Button = ({ link, message }: ButtonProps) => {
  return (
    <Link
      href={link}
      className="bg-indigo-300 w-fit rounded-lg mb-2 text-white no-underline"
    >
      <div className="text-sm font-medium py-2 px-6 shadow-sm md:shadow-md md:py-3 md:px-8 md:text-lg md:rounded-lg">
        {message}
      </div>
    </Link>
  );
};
