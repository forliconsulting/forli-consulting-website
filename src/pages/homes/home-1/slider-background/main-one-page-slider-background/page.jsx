import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import Home1 from "@/components/homes/home-1";

import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Hero5 from "@/components/homes/home-1/heros/Hero5";
import { mainDemoOnepage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 1 Slider Background Onepage || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home1SliderBackgroundOnepage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar wch-unset ">
            <Header1 links={mainDemoOnepage} />
          </nav>
          <main id="main">
            <div className="home-section relative scrollSpysection" id="home">
              <Hero5 />
            </div>
            <Home1 onePage />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
