import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Home6 from "@/components/homes/home-6";
import Hero1 from "@/components/homes/home-6/heros/Hero1";
import Hero3 from "@/components/homes/home-6/heros/Hero3";
import { fancyMultipageDark } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 6 BG Video MultiPage Dark || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home6BGVideoMultiPageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-fancy">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              <Header6 links={fancyMultipageDark} />
            </nav>
            <main id="main">
              <section
                className="home-section bg-dark-1 light-content scrollSpysection"
                id="home"
              >
                <Hero3 />
              </section>

              <Home6 dark />
            </main>
            <footer className="page-section footer bg-dark-2 light-content pb-30">
              <Footer6 />
            </footer>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
