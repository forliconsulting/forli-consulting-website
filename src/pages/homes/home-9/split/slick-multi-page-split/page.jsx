import Footer8 from "@/components/footers/Footer8";

import Header9 from "@/components/headers/Header9";
import Home9 from "@/components/homes/home-9";
import Hero1 from "@/components/homes/home-9/heros/Hero1";
import Hero2 from "@/components/homes/home-9/heros/Hero2";
import { slickMultipages } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 9 Split MultiPage || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home9SplitMultiPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-slick">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark stick-fixed wow-menubar wch-unset">
              <Header9 links={slickMultipages} />
            </nav>{" "}
          </div>
          <main id="main">
            <section className="home-section scrollSpysection" id="home">
              <Hero2 />
            </section>

            <Home9 />
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
