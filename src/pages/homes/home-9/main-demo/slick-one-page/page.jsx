import Footer8 from "@/components/footers/Footer8";

import Header9 from "@/components/headers/Header9";
import Home9 from "@/components/homes/home-9";
import Hero1 from "@/components/homes/home-9/heros/Hero1";
import { slickOnepage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 9 Main Demo Onepage || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home9MainDemoOnepage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-slick">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset">
            <Header9 links={slickOnepage} />
          </nav>
          <main id="main">
            <section className="home-section scrollSpysection" id="home">
              <div className="bg-shape-2 wow fadeIn">
                <img
                  src="/assets/images/demo-slick/bg-shape-2.svg"
                  width={858}
                  height={804}
                  alt=""
                />
              </div>
              <Hero1 />
            </section>

            <Home9 onePage />
          </main>
          <footer className="page-section footer position-relative overflow-hidden pb-30">
            <div className="bg-shape-4">
              <img
                src="/assets/images/demo-slick/bg-shape-4.svg"
                width={1600}
                height={268}
                alt=""
              />
            </div>
            <Footer8 />
          </footer>
        </div>
      </div>
    </>
  );
}
