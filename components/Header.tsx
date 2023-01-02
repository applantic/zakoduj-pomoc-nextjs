import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-white shadow-md shadow-slate-300 font-normal mb-5">
      <div className="flex flex-wrap items-center justify-center my-0 mx-auto h-auto max-w-6xl">
        <strong className="m-2.5">
          <Link href="/" className="text-indigo-900 no-underline mt-2.5">
            Zakoduj Pomoc ❤️
          </Link>
        </strong>
        <nav className="text-indigo-900 my-2.5 mx-auto">
          <Link
            href="./projects"
            className="mt-1 mr-3 mb-1 ml-3 hover:underline"
          >
            Projekty
          </Link>
          <Link href="./team" className="mt-1 mr-3 mb-1 ml-3 hover:underline">
            Zespół
          </Link>
          <Link
            href="./documents"
            className="mt-1 mr-3 mb-1 ml-3 hover:underline"
          >
            Dokumenty
          </Link>
          <Link
            href="./contact"
            className="mt-1 mr-3 mb-1 ml-3 hover:underline"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};
