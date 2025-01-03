import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Home4 from "@/components/homes/home-4";
import Hero1Dark from "@/components/homes/home-4/heros/Hero1Dark";
import Hero2 from "@/components/homes/home-4/heros/Hero2";
import { corporateOnepage } from "@/data/menu";

import ParallaxContainer from "@/components/common/ParallaxContainer";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 4 Image Parallax Onepage Dark || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home4ImageParallaxOnepageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-corporate">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <div className="dark-mode">
              <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
                <Header4 links={corporateOnepage} />
              </nav>
            </div>
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5 scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-corporate/section-bg-5.jpg)",
                }}
                id="home"
              >
                <Hero2 />
              </ParallaxContainer>

              <Home4 onePage dark />
            </main>
            <footer className="footer-2 bg-dark-1 light-content pb-50">
              <Footer4 />
            </footer>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
