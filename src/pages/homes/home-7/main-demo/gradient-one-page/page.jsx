import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Home7 from "@/components/homes/home-7";
import Hero1 from "@/components/homes/home-7/heros/Hero1";
import { gradientOnePage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 7 Main Demo Onepage || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home7MainDemoOnepage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-gradient">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header7 links={gradientOnePage} />
          </nav>
          <main id="main">
            <section
              className="home-section bg-gradient-gray-light-1 bg-scroll scrollSpysection"
              id="home"
            >
              <Hero1 />
            </section>

            <Home7 onePage />
          </main>
          <footer className="page-section footer bg-dark-1 light-content overflow-hidden pb-30">
            <div className="bg-shape-4">
              <img
                width="1443"
                height="644"
                src="/assets/images/demo-gradient/bg-shape-1.svg"
                alt=""
              />
            </div>
            <Footer7 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
