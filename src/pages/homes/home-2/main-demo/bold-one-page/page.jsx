import Footer2 from "@/components/footers/Footer2";

import Header2 from "@/components/headers/Header2";

import Home2 from "@/components/homes/home-2";
import Hero from "@/components/homes/home-2/heros/Hero";
import { boldOnepage } from "@/data/menu";

import ParallaxContainer from "@/components/common/ParallaxContainer";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 2 Main Demo Onepage || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home2MainDemoOnepage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-bold">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header2 links={boldOnepage} />{" "}
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-light-alpha-70 parallax-5 scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-bold/section-bg-1.jpg)",
              }}
              id="home"
            >
              <Hero />
            </ParallaxContainer>

            <Home2 onePage />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>{" "}
    </>
  );
}