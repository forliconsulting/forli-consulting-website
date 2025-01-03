import Header1 from "@/components/headers/Header1";
import Home1 from "@/components/homes/home-1";

import ParallaxContainer from "@/components/common/ParallaxContainer";
import { menuItemsDark } from "@/data/menu";
import Hero3 from "@/components/homes/home-1/heros/Hero3";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Footer1 from "@/components/footers/Footer1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 1 Image Parallax MultiPage Dark || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home1ImageParallaxMultiPageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="dark-mode">
        {" "}
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-1 bg-dark-alpha-60 light-content parallax-5 scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-13.jpg)",
                }}
                id="home"
              >
                <Hero3 />
              </ParallaxContainer>
              <Home1 dark={true} />
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
