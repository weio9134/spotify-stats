import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "./component/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Features",
  description: "Generated by create next app",
};

export default function FeaturesLayout({ children }) {
  return (
    <section className="flex flex-row min-h-screen items-center pt-20 text-white text-base">
      <Sidebar />
      { children }
    </section>
  );
}
