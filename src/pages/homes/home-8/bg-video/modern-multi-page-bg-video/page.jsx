import Footer2 from "@/components/footers/Footer2";

import Header8 from "@/components/headers/Header8";
import Home8 from "@/components/homes/home-8";
import Hero1 from "@/components/homes/home-8/heros/Hero1";
import Hero5 from "@/components/homes/home-8/heros/Hero5";
import { modernMultipage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 8 BG Video MultiPage || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home8BGVideoMultiPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-modern">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header8 links={modernMultipage} />
            </nav>{" "}
          </div>
          <main id="main">
            <section
              className="home-section bg-dark-1 light-content scrollSpysection"
              id="home"
            >
              <Hero5 />
            </section>

            <Home8 eadge2 />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}