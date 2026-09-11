import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Interlude from "./components/Interlude";
import About from "./components/About";
import Topics from "./components/Topics";
import Process from "./components/Process";
import Voices from "./components/Voices";
import Fee from "./components/Fee";
import CtaStrip from "./components/CtaStrip";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Interlude />
        <About />
        <Topics />
        <Process />
        <Voices />
        <Fee />
        <CtaStrip />
      </main>
      <Footer />
    </>
  );
}
