import AnimatedText from "@/components/common/AnimatedText";
import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import About from "@/components/homes/home-6/About";
import Features from "@/components/homes/home-6/Features";
import Testimonials from "@/components/homes/home-6/Testimonials";
import TestimonialsDark from "@/components/homes/home-6/TestimonialsDark";
import { fancyMultipage, fancyMultipageDark } from "@/data/menu";

import { Link } from "react-router-dom";
const onePage = false;
const dark = true;
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Fancy About Dark || Forli &mdash; One & Multi Page Reactjs Creative Template",
  description: "Forli &mdash; One & Multi Page Reactjs Creative Template",
};
export default function FancyAboutPageDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-fancy">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar wch-unset">
              <Header6 links={fancyMultipageDark} />
            </nav>
            <main id="main">
              <section className="page-section bg-dark-1 bg-gradient-gray-dark-1 light-content bg-scroll overflow-hidden">
                {/* <!-- Background Shape --> */}
                <div className="bg-shape-1 opacity-003 wow fadeIn">
                  <img
                    width="1443"
                    height="844"
                    src="/assets/images/demo-fancy/bg-shape-1.svg"
                    alt=""
                  />
                </div>
                {/* <!-- End Background Shape --> */}

                <div className="container position-relative pt-10 pt-sm-40 text-center">
                  <div className="row">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                      <h1 className="hs-title-10 mb-10">
                        <span
                          className="wow charsAnimIn"
                          data-splitting="chars"
                        >
                          <AnimatedText text="About" />
                          <span className="mark-decoration-3-wrap">
                            <AnimatedText text="Studio" />
                            <b
                              className="mark-decoration-3 wow scalexIn"
                              data-wow-delay="0.5s"
                            ></b>
                          </span>
                        </span>
                      </h1>

                      <p
                        className="section-descr mb-0 wow fadeIn"
                        data-wow-delay="0.2s"
                      >
                        Crafting immersive digital journeys for brands.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className={`page-section  scrollSpysection ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
                id="about"
              >
                <div className="container position-relative">
                  <div className="row mb-xs-40">
                    <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
                      <p
                        className="section-descr mb-40 mb-sm-20 wow fadeInUp"
                        data-wow-delay="0.06s"
                      >
                        Although web design has a fairly recent history. It has
                        become a large part of people's everyday lives. It is
                        hard to imagine the Internet without animated graphics,
                        different styles of typography, background, videos and
                        music.
                      </p>
                      <div
                        className="local-scroll wow fadeInUp"
                        data-wow-delay="0.12s"
                      >
                        <Link
                          to={`/fancy-services${dark ? "-dark" : ""}`}
                          className="link-hover-anim"
                          data-link-animate="y"
                        >
                          <span className="link-strong link-strong-unhovered">
                            View our services{" "}
                            <i
                              className="mi-arrow-right size-24"
                              aria-hidden="true"
                            ></i>
                          </span>
                          <span
                            className="link-strong link-strong-hovered"
                            aria-hidden="true"
                          >
                            View our services{" "}
                            <i
                              className="mi-arrow-right size-24"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Images Composition */}
                  <About />
                  {/* End Images Composition */}
                </div>
              </section>
              <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
              <section
                className={`page-section  ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
              >
                <Features />
              </section>
              <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
              <section
                className={`page-section  ${
                  dark ? "bg-dark-1 light-content" : ""
                } `}
              >
                {dark ? <TestimonialsDark /> : <Testimonials />}
              </section>
            </main>
            <footer className="page-section footer bg-dark-2 light-content pb-30">
              <Footer6 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
