import Footer1 from "@/components/footers/Footer1";

import ParallaxContainer from "@/components/common/ParallaxContainer";

import Header1Multipage from "@/components/headers/Header1Multipage";
import AnimatedText from "@/components/common/AnimatedText";
import Widget1 from "@/components/blog/widgets/Widget1";
import Pagination from "@/components/common/Pagination";

import Content1 from "@/components/blog/content/Content1";
import { menuItemsDark } from "@/data/menu";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Main Blog Classic Page Sidebar Left Dark || Resonance &mdash; One & Multi Page Reactjs Creative Template",
  description: "Resonance &mdash; One & Multi Page Reactjs Creative Template",
};
export default function MainBlogClassicPageSidebarLeftDark() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="theme-main">
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              {" "}
              <Header1Multipage links={menuItemsDark} />
            </nav>
            <main id="main">
              <section className="page-section pt-0 pb-0" id="home">
                <ParallaxContainer
                  className="page-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5"
                  style={{
                    backgroundImage:
                      "url(/assets/images/full-width-images/section-bg-2.jpg)",
                  }}
                >
                  <div className="container position-relative pt-30 pt-sm-50">
                    {/* Section Content */}
                    <div className="text-center">
                      <div className="row">
                        {/* Page Title */}
                        <div className="col-md-8 offset-md-2">
                          <h1 className="hs-title-1 mb-20">
                            <span
                              className="wow charsAnimIn"
                              data-splitting="chars"
                            >
                              <AnimatedText text="Blog" />
                            </span>
                          </h1>
                          <div className="row">
                            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                              <p
                                className="section-descr mb-0 wow fadeIn"
                                data-wow-delay="0.2s"
                                data-wow-duration="1.2s"
                              >
                                Discovering our brilliant insights and
                                inspiration.
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* End Page Title */}
                      </div>
                    </div>
                    {/* End Section Content */}
                  </div>
                </ParallaxContainer>
              </section>
              <>
                {/* Section */}
                <section className="page-section bg-dark-1 light-content">
                  <div className="container relative">
                    <div className="row">
                      {/* Content */}
                      <div className="col-md-8 offset-lg-1 mb-sm-80 order-first order-md-last">
                        <Content1 />
                        {/* End Post */}
                        {/* Pagination */}
                        <Pagination className={"pagination"} />
                        {/* End Pagination */}
                      </div>
                      {/* End Content */}
                      {/* Sidebar */}
                      <div className="col-md-4 col-lg-3">
                        <Widget1 searchInputClass="form-control input-lg search-field round" />
                      </div>
                      {/* End Sidebar */}
                    </div>
                  </div>
                </section>

                {/* End Section */}
              </>
            </main>
            <Footer1 dark />
          </div>{" "}
        </div>
      </div>
    </>
  );
}