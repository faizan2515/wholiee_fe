import React from "react";

function AboutUs() {
  return (
    <>
      <section className="container my-lg-2 pt-5 pb-lg-7">
        <div className="row align-items-center">
          <div className="col-lg-5 py-3 py-lg-0">
            <h1>Our goals. Our mission.</h1>
            <h2 className="h3">How we help other companies to grow.</h2>
            <div className="py-4">
              <p className="callout">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
            </div>
            <a
              className="btn-video btn-video-primary btn-video-sm me-3"
              href="https://www.youtube.com/watch?v=hTu0a4o97dU"
            ></a>
            <span className="fs-sm text-muted">Get to know us better</span>
          </div>
          <div className="col-xl-6 col-lg-7 offset-xl-1 position-relative">
            <div className="py-5" style={{ minHeight: "543px" }}>
              <div
                className="d-none d-lg-block position-absolute bg-no-repeat bg-position-center h-100"
                style={{
                  top: 0,
                  left: "-45px",
                  width: "646px",
                  backgroundImage: "url(img/pages/about/bg-shape.svg)",
                }}
              ></div>
              <div className="row g-0 mx-n2 pt-lg-4">
                <div className="col-sm-4 px-2 mb-3">
                  <p className="card h-100 card-body py-5 justify-content-center border-0 shadow-lg text-center">
                    <i className="ai-zap text-primary h1 mb-3"></i>
                    <h3 className="h5 mb-0">Boost</h3>
                  </p>
                </div>
                <div className="col-sm-4 px-2 mb-3">
                  <p className="card card-body py-5 border-0 shadow-lg text-center mb-3">
                    <i className="ai-pie-chart text-danger h1 mb-3"></i>
                    <h3 className="h5 mb-0">Analize</h3>
                  </p>
                  <p className="card card-body py-5 border-0 shadow-lg text-center">
                    <i className="ai-refresh-ccw text-info h1 mb-3"></i>
                    <h3 className="h5 mb-0">Automate</h3>
                  </p>
                </div>
                <div className="col-sm-4 px-2 mb-3">
                  <p className="card card-body py-5 border-0 shadow-lg text-center mb-3">
                    <i className="ai-folder-plus text-success h1 mb-3"></i>
                    <h3 className="h5 mb-0">Create</h3>
                  </p>
                  <p className="card card-body py-5 border-0 shadow-lg text-center">
                    <i className="ai-share text-warning h1 mb-3"></i>
                    <h3 className="h5 mb-0">Share</h3>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-5 mt-n4 mb-6 mt-lg-0 mb-lg-7">
        <div className="container py-3">
          <div className="row">
            <div className="col-md-3 col-sm-6 text-center py-3">
              <h3 className="display-4">15</h3>
              <p className="text-muted mb-0">Years of experience</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center py-3">
              <h3 className="display-4">2k+</h3>
              <p className="text-muted mb-0">Employees worldwide</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center py-3">
              <h3 className="display-4">90%</h3>
              <p className="text-muted mb-0">Positive feedback</p>
            </div>
            <div className="col-md-3 col-sm-6 text-center py-3">
              <h3 className="display-4">100</h3>
              <p className="text-muted mb-0">Successfully completed projects</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb-5 pb-3 pb-lg-0 mb-lg-7">
        <h2 className="pb-4 mb-4 text-center">People behind our success</h2>
        <div className="row mb-3">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "21rem" }}
            >
              <a
                className="card-floating-icon"
                href="mailto:sarah.cole@example.com"
              >
                <i className="ai-mail"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src="img/team/01.jpg" alt="Sarah Cole" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Sarah Cole</h3>
                <p className="fs-xs text-body mb-0">CEO, Co-Founder</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "21rem" }}
            >
              <a
                className="card-floating-icon"
                href="mailto:charlie.welch@example.com"
              >
                <i className="ai-mail"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src="img/team/02.jpg" alt="Charlie Welch" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Charlie Welch</h3>
                <p className="fs-xs text-body mb-0">CTO, Co-Founder</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "21rem" }}
            >
              <a
                className="card-floating-icon"
                href="mailto:emma.brown@example.com"
              >
                <i className="ai-mail"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src="img/team/03.jpg" alt="Emma Brown" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Emma Brown</h3>
                <p className="fs-xs text-body mb-0">Director of Marketing</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "21rem" }}
            >
              <a
                className="card-floating-icon"
                href="mailto:rosalie.lyons@example.com"
              >
                <i className="ai-mail"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src="img/team/04.jpg" alt="Rosalie Lyons" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Rosalie Lyons</h3>
                <p className="fs-xs text-body mb-0">Financial Director</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "21rem" }}
            >
              <a
                className="card-floating-icon"
                href="mailto:jane.tanaka@example.com"
              >
                <i className="ai-mail"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src="img/team/05.jpg" alt="Jane Tanaka" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Jane Tanaka</h3>
                <p className="fs-xs text-body mb-0">Lead PR Strategist</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "21rem" }}
            >
              <a
                className="card-floating-icon"
                href="mailto:sanomi.smith@example.com"
              >
                <i className="ai-mail"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src="img/team/06.jpg" alt="Sanomi Smith" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Sanomi Smith</h3>
                <p className="fs-xs text-body mb-0">
                  Director of Human Resources
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "21rem" }}
            >
              <a
                className="card-floating-icon"
                href="mailto:olivia.jones@example.com"
              >
                <i className="ai-mail"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src="img/team/07.jpg" alt="Olivia Jones" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Olivia Jones</h3>
                <p className="fs-xs text-body mb-0">Content Manager</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "21rem" }}
            >
              <a
                className="card-floating-icon"
                href="mailto:richard.davis@example.com"
              >
                <i className="ai-mail"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src="img/team/08.jpg" alt="Richard Davis" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Richard Davis</h3>
                <p className="fs-xs text-body mb-0">Lead Accountant</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-body py-5 text-center text-md-end">
          <div className="d-md-flex justify-content-center align-items-center">
            <div className="mb-4 mb-md-0 me-md-5 me-lg-6 me-xl-7">
              <h3>Want to be part of our team? We are hiring</h3>
              <p className="text-muted mb-0">
                Check our current opennings and submit your application
              </p>
            </div>
            <button className="btn btn-gradient">
              Submit your application
            </button>
          </div>
        </div>
      </section>
      <section className="container pb-5 pb-lg-6">
        <h2 className="mb-5 text-center">We work with world’s top companies</h2>
        <div className="row">
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/01_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/01_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/02_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/02_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/03_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/03_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/04_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/04_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/05_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/05_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/06_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/06_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/07_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/07_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/08_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/08_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/09_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/09_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/10_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/10_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/11_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/11_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col-6 mb-grid-gutter">
            <button className="card border-0 shadow card-hover py-3 py-sm-4">
              <div className="card-body px-1 py-0 text-center">
                <div className="swap-image">
                  <img
                    className="swap-to"
                    src="img/shop/brands/12_color.png"
                    alt="Brand logo"
                    width="150"
                  />
                  <img
                    className="swap-from"
                    src="img/shop/brands/12_gray.png"
                    alt="Brand logo"
                    width="150"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
