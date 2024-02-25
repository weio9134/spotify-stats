"use client"
import Header from "./component/Header";
import About from "./component/About";
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <Fade direction="top"> <Header /> </Fade>
      <About />
    </main>
  );
}
