import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">Zakoduj Pomoc</Link>
        <Link href="./projects">Projekty</Link>
        <Link href="./team">Zespół</Link>
        <Link href="./documents">Dokumenty</Link>
        <Link href="/">Kontakt</Link>
      </nav>
    </header>
  );
};
