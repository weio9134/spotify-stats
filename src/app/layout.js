import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Stats",
  description: "Curating stats and wrapped for your Spotify account",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#212121] text-white font-mono`}>
        <Navbar />
        { children }
        <Footer />
      </body>
    </html>
  );
}
