import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Zakoduj Pomoc</Link>
        <Link href="./projects">Projekty</Link>
        <Link href="/">Zespół</Link>
        <Link href="/">Dokumenty</Link>
        <Link href="/">Kontakt</Link>
      </nav>
    </header>
  );
};
