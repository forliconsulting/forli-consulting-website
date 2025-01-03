import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Header1Multipage from "@/components/headers/Header1Multipage";
import Home1 from "@/components/homes/home-1";
import { menuItems } from "@/data/menu";
import Hero1 from "@/components/homes/home-1/heros/Hero1";
import Hero2 from "@/components/homes/home-1/heros/Hero2";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Home 1 Typed Text MultiPage || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function Home1TypedTextMultiPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar ">
            <Header1Multipage links={menuItems} />
          </nav>
          <main id="main">
            <section
              className="home-section bg-gradient-gray-light-1 bg-scroll scrollSpysection"
              id="home"
            >
              <div className="bg-shape-1 wow fadeIn">
                <img
                  width="1443"
                  height="844"
                  src="/assets/images/bg-shape-1.svg"
                  alt=""
                  className="opacity-05"
                />
              </div>
              <Hero2 />
            </section>
            <Home1 />
          </main>
          <Footer1 />
        </div>{" "}
      </div>
    </>
  );
}
