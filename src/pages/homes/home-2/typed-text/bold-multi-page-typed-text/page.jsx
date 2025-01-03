import Footer2 from "@/components/footers/Footer2";

import Header2 from "@/components/headers/Header2";

import Home2 from "@/components/homes/home-2";
import Hero2 from "@/components/homes/home-2/heros/Hero2";
import { boldMultipage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 2 Typed Text MultiPage || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home2TypedTextMultiPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-bold">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header2 links={boldMultipage} />
          </nav>
          <main id="main">
            <section
              className="home-section parallax-mousemove-scene scrollSpysection"
              id="home"
            >
              <Hero2 />
            </section>

            <Home2 />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>{" "}
    </>
  );
}
