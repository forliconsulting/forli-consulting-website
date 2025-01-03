import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";

import Home1 from "@/components/homes/home-1";

import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Hero7 from "@/components/homes/home-1/heros/Hero7";
import { mainDemoOnepage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 1 BG Video Youtube Onepage Dark || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home1BGVideoYoutubeOnepageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="dark-mode">
        {" "}
        <div className="theme-main">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header1 links={mainDemoOnepage} />
            </nav>
            <main id="main">
              <Hero7 />
              <Home1 onePage dark={true} />
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
