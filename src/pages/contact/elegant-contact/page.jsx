import Footer5 from "@/components/footers/Footer5";

import Header5 from "@/components/headers/Header5";

import { Link } from "react-router-dom";
const onePage = false;
const dark = false;
import { elegantMultipage } from "@/data/menu";
import { categories } from "@/data/categories";
import { tags } from "@/data/tags";
import { archiveLinks } from "@/data/archeve";
import Pagination from "@/components/common/Pagination";
import { blogs15 } from "@/data/blogs";
import Contact from "@/components/homes/home-5/Contact";
import MarqueeDark from "@/components/homes/home-5/MarqueeDark";
import Marquee from "@/components/homes/home-5/Marquee";
import Map from "@/components/common/Map";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Elegant Contact || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function ElegantContactPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-elegant">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header5 links={elegantMultipage} />
          </nav>
          <main id="main">
            <section
              className="page-section bg-dark-alpha-50 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-elegant/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-20 pt-sm-20 text-center">
                <h1
                  className="hs-title-3 mb-10 wow fadeInUpShort"
                  data-wow-duration="0.6s"
                >
                  CONTACT US
                </h1>
                <div className="row wow fadeIn" data-wow-delay="0.2s">
                  <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <p className="section-title-tiny mb-0 opacity-075">
                      Reach out and let's bring your vision to life.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              className={`page-section  scrollSpysection mb-0 pb-0  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="contact"
            >
              <Contact />
            </section>
            <div className="page-section overflow-hidden">
              {dark ? <MarqueeDark /> : <Marquee />}
            </div>
            <div className="google-map">
              <Map />
            </div>
          </main>
          <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
            <Footer5 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
