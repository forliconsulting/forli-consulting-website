import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import Home7 from "@/components/homes/home-7";
import Hero1 from "@/components/homes/home-7/heros/Hero1";
import Hero2 from "@/components/homes/home-7/heros/Hero2";
import { gradientOnePage } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 7 BG Video Onepage Dark || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home7BGVideoOnepageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-gradient">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              {" "}
              <Header7 links={gradientOnePage} />
            </nav>
            <main id="main">
              <section
                className="home-section bg-dark-1 light-content scrollSpysection"
                id="home"
              >
                <Hero2 />
              </section>

              <Home7 onePage dark />
            </main>
            <footer className="page-section footer bg-dark-2 light-content overflow-hidden pb-30">
              <div className="bg-shape-4 opacity-003">
                <img
                  width="1443"
                  height="644"
                  src="/assets/images/demo-gradient/bg-shape-1-white.svg"
                  alt=""
                />
              </div>
              <Footer7 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
