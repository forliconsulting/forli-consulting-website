import Map from "@/components/common/Map";

import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Contact from "@/components/homes/home-10/Contact";

import { strongMultiPages, strongMultiPagesDark } from "@/data/menu";

import { Link } from "react-router-dom";
import ParallaxContainer from "@/components/common/ParallaxContainer";
const dark = true;
const onePage = false;
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Strong Contact Dark || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function StrongContactPageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-strong">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
              <Header10 links={strongMultiPagesDark} />
            </nav>
            <main className="main">
              <ParallaxContainer
                className="page-section bg-dark-alpha-30 light-content parallax-5"
                style={{
                  backgroundImage:
                    "url(/assets/images/demo-strong/section-bg-1.jpg)",
                }}
                id="home"
              >
                <div className="container position-relative pt-sm-30">
                  {/* Home Section Content */}
                  <div className="home-content text-center">
                    <h1 className="hs-title-7 mb-0">
                      <span
                        className="wow charsAnimIn-2"
                        data-splitting="chars"
                      >
                        Contact <span className="font-alt">Us</span>
                      </span>
                    </h1>
                  </div>
                  {/* End Home Section Content */}
                </div>
              </ParallaxContainer>
              <section
                className={`page-section  scrollSpysection  ${
                  dark ? "bg-dark-1 light-content" : ""
                }`}
                id="contact"
              >
                <Contact />
              </section>
              <div className="google-map light-content">
                <Map />
              </div>
            </main>

            <footer className="footer-1 bg-dark-2 light-content">
              <Footer9 />
            </footer>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
