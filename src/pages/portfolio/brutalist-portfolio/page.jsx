import AnimatedText from "@/components/common/AnimatedText";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Portfolio from "@/components/homes/home-3/Portfolio";

const onePage = false;
const dark = false;
import { brutalistMultipage } from "@/data/menu";

import { Link } from "react-router-dom";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Brutalist Portfolio || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function BrutalistPortfolioPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-brutalist">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header3 links={brutalistMultipage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="page-section parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-brutalist/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-20 pt-sm-40">
                <h1 className="hs-title-2 font-alt uppercase mb-0">
                  <span className="wow charsAnimIn" data-splitting="chars">
                    <AnimatedText text="SELECTED WORKS" />
                  </span>
                  <span
                    className="section-title-image wow fadeScaleIn"
                    data-wow-delay="0.3s"
                  >
                    <img
                      src="/assets/images/demo-brutalist/shape-2.svg"
                      alt=""
                      width={35}
                      height={35}
                    />
                  </span>
                </h1>
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              } `}
              id="portfolio"
            >
              <div className="container position-relative">
                <div className="row mb-100 mb-md-80 mb-sm-40">
                  <div className="col-md-8 col-lg-9 mb-sm-30">
                    <p className="section-descr-large mb-0 wow fadeInUp">
                      We believe in making{" "}
                      <span className="mark-decoration-2">the best work</span>,
                      and being the best to work with. We help brands &amp;
                      businesses stand out in the changing digital landscape.
                    </p>
                  </div>
                  <div className="col-md-4 col-lg-3 text-end pt-20 pt-md-10 pt-sm-0 local-scroll">
                    {/* brutalist-portfolio */}

                    <Link
                      to={`/brutalist-contact${dark ? "-dark" : ""}`}
                      className="link-hover-anim align-middle"
                      data-link-animate="y"
                    >
                      <span className="link-strong link-strong-unhovered">
                        Contact Us{" "}
                        <i
                          className="icon-arrow-right size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span
                        className="link-strong link-strong-hovered"
                        aria-hidden="true"
                      >
                        Contact Us{" "}
                        <i
                          className="icon-arrow-right size-14"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Portfolio Grid */}
                <Portfolio />

                {/* End Portfolio Grid */}
              </div>
            </section>
          </main>
          <footer className="page-section footer-1 bg-dark-1 light-content">
            <Footer3 />
          </footer>
        </div>
      </div>
    </>
  );
}
