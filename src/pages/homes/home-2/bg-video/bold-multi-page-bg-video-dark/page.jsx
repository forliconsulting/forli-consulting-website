import Footer2 from "@/components/footers/Footer2";

import Header2 from "@/components/headers/Header2";

import Home2 from "@/components/homes/home-2";
import Hero from "@/components/homes/home-2/heros/Hero";
import Hero3 from "@/components/homes/home-2/heros/Hero3";
import { boldMultipageDark } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 2 BG Video MultiPage Dark || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home2BGVideoMultiPageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-bold">
        {" "}
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header2 links={boldMultipageDark} />
            </nav>{" "}
            <main id="main">
              <section
                className="home-section light-content scrollSpysection"
                id="home"
              >
                <Hero3 />
              </section>

              <Home2 dark />
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer2 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
