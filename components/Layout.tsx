import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-200 via-indigo-100 font-Poppins">
      <Header />
      <div className="flex flex-grow justify-evenly">{children}</div>
      <Footer />
    </div>
  );
};
