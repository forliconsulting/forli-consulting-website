import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home10 from "@/components/homes/home-10";

import Hero3 from "@/components/homes/home-10/heros/Hero3";
import { strongSinglePages } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 10 BG Video Onepage || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home10BGVideoOnepage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-strong">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
              <Header10 links={strongSinglePages} />
            </nav>{" "}
          </div>
          <main id="main">
            <section
              className="home-section light-content scrollSpysection"
              id="home"
            >
              <Hero3 />
            </section>

            <Home10 onePage />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
