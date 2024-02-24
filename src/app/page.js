import Header from "./component/Header";
import About from "./component/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      {/* <div className="container mx-auto px-12 py-4">
       
      </div> */}
      <Header />
      <About />
    </main>
  );
}
