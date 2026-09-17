import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Incident from "./components/Incident";
import Solutions from "./components/Solutions";
import NewXbox from "./components/NewXbox";
import Verdict from "./components/Verdict";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#050806] font-sans text-[#f2f6ee]">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Incident />
        <Solutions />
        <NewXbox />
        <Verdict />
      </main>
      <Footer />
    </div>
  );
}
