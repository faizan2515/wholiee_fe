import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "../data/slides";

function Home({ products }) {
  return (
    <>
      <Carousel style={{ maxHeight: 800, overflow: "hidden" }}>
        {slides.map((slide) => (
          <Carousel.Item key={slide.id}>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={`Slider ${slide.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <section className="container pt-5 mt-5 mt-md-0 pt-md-6 pt-lg-7">
        <h2 className="text-center mb-5">Trending products</h2>
        <div className="row pb-1">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter"
            >
              <div className="card card-product card-hover">
                <button className="border-0 bg-transparent card-img-top">
                  <img src={product.Product_Image} alt="Product thumbnail" />
                </button>
                <div className="card-body">
                  <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                    {product.Product_Category}
                  </button>
                  <h3 className="fs-md fw-medium mb-2">
                    <button className="border-0 bg-transparent meta-link">
                      {product.Product_name}
                    </button>
                  </h3>
                  <span className="text-heading fw-semibold">
                    Rs. {product.Product_Per_Price}
                  </span>
                </div>
                <div className="card-footer justify-content-center">
                  <div className="d-flex align-items-center">
                    <button className="border-0 bg-transparent btn-addtocart">
                      <i className="ai-shopping-cart"></i>
                      <span className="btn-tooltip">To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container py-5 mt-3 my-md-0 py-md-6 py-lg-7">
        <div className="row">
          <div className="col-lg-4 d-none d-lg-block">
            <div className="card h-100 p-4">
              <div className="p-2">
                <div className="d-flex justify-content-between align-items-center mb-4 pb-1">
                  <h3 className="fs-xl mb-0">New arrivals</h3>
                  <button className="border-0 bg-transparent fs-sm fw-medium me-n2">
                    View more
                    <i className="ai-chevron-right fs-lg ms-1 align-middle"></i>
                  </button>
                </div>
                <div className="d-flex align-items-center pb-2 mb-1">
                  <button className="border-0 bg-transparent d-block flex-shrink-0">
                    <img
                      className="rounded"
                      src="img/demo/shop-homepage/thumbnails/04.jpg"
                      alt="Product"
                      width="60"
                    />
                  </button>
                  <div className="ps-2 ms-1">
                    <h4 className="fs-md nav-heading mb-1">
                      <button className="border-0 bg-transparent fw-medium">
                        Block-colored Hooded Top
                      </button>
                    </h4>
                    <p className="fs-sm mb-0">$27.50</p>
                  </div>
                </div>
                <div className="d-flex align-items-center pb-2 mb-1">
                  <button className="border-0 bg-transparent d-block flex-shrink-0">
                    <img
                      className="rounded"
                      src="img/demo/shop-homepage/thumbnails/05.jpg"
                      alt="Product"
                      width="60"
                    />
                  </button>
                  <div className="ps-2 ms-1">
                    <h4 className="fs-md nav-heading mb-1">
                      <button className="border-0 bg-transparent fw-medium">
                        Smart Watch Series 5
                      </button>
                    </h4>
                    <p className="fs-sm mb-0">$364.99</p>
                  </div>
                </div>
                <div className="d-flex align-items-center pb-2 mb-1">
                  <button className="border-0 bg-transparent d-block flex-shrink-0">
                    <img
                      className="rounded"
                      src="img/demo/shop-homepage/thumbnails/02.jpg"
                      alt="Product"
                      width="60"
                    />
                  </button>
                  <div className="ps-2 ms-1">
                    <h4 className="fs-md nav-heading mb-1">
                      <button className="border-0 bg-transparent fw-medium">
                        Running Sneakers, Collection
                      </button>
                    </h4>
                    <p className="fs-sm mb-0">$145.00</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button className="border-0 bg-transparent d-block flex-shrink-0">
                    <img
                      className="rounded"
                      src="img/demo/shop-homepage/thumbnails/06.jpg"
                      alt="Product"
                      width="60"
                    />
                  </button>
                  <div className="ps-2 ms-1">
                    <h4 className="fs-md nav-heading mb-1">
                      <button className="border-0 bg-transparent fw-medium">
                        Bluetooth Headset
                      </button>
                    </h4>
                    <p className="fs-sm mb-0">$258.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="bg-secondary rounded-3 pt-5 px-3 ps-sm-5 pe-sm-2">
              <div className="d-sm-flex align-items-end text-center text-sm-start ps-2">
                <div className="me-sm-n6 pb-5">
                  <h2 className="h1 text-sm-nowrap">Virtual Reality</h2>
                  <p
                    className="pb-2 mx-auto mx-sm-0"
                    style={{ maxWidth: "14rem" }}
                  >
                    Gadgets from top brands at discounted price
                  </p>
                  <div className="d-inline-block bg-faded-danger text-danger fs-sm fw-medium rounded-1 px-3 py-2">
                    Limited time offer
                  </div>
                  <div
                    className="countdown pt-3 h4 justify-content-center justify-content-sm-start"
                    data-countdown="10/01/2021 07:00:00 PM"
                  >
                    <div className="countdown-days">
                      <span className="countdown-value">0</span>
                      <span className="countdown-label fs-xs text-muted">
                        Days
                      </span>
                    </div>
                    <div className="countdown-hours">
                      <span className="countdown-value">0</span>
                      <span className="countdown-label fs-xs text-muted">
                        Hours
                      </span>
                    </div>
                    <div className="countdown-minutes">
                      <span className="countdown-value">0</span>
                      <span className="countdown-label fs-xs text-muted">
                        Mins
                      </span>
                    </div>
                  </div>
                  <button className="border-0 bg-transparent btn btn-primary">
                    Get one now
                  </button>
                </div>
                <div>
                  <img
                    src="img/demo/shop-homepage/banner.png"
                    alt="Promo banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
