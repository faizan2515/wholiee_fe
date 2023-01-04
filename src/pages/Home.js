import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "../data/slides";

function Home() {
  return (
    <>
      <Carousel>
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
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card card-product card-hover">
              <button className="border-0 bg-transparent card-img-top">
                <img src="img/shop/catalog/01.jpg" alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                  Men's clothing
                </button>
                <h3 className="fs-md fw-medium mb-2">
                  <button className="border-0 bg-transparent meta-link">
                    Simple Cotton Gray T-shirt
                  </button>
                </h3>
                <span className="text-heading fw-semibold">$19.00</span>
              </div>
              <div className="card-footer">
                <div className="star-rating mt-n1">
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star"></i>
                  <i className="sr-star ai-star"></i>
                </div>
                <div className="d-flex align-items-center">
                  <button className="border-0 bg-transparent btn-wishlist">
                    <i className="ai-heart"></i>
                    <span className="btn-tooltip">Wishlist</span>
                  </button>
                  <span className="btn-divider"></span>
                  <button className="border-0 bg-transparent btn-addtocart">
                    <i className="ai-shopping-cart"></i>
                    <span className="btn-tooltip">To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card card-product card-hover">
              <button className="border-0 bg-transparent card-img-top">
                <img src="img/shop/catalog/02.jpg" alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                  Electronics
                </button>
                <h3 className="fs-md fw-medium mb-2">
                  <button className="border-0 bg-transparent meta-link">
                    Wireless Headphones
                  </button>
                </h3>
                <span className="text-heading fw-semibold">$165.00</span>
              </div>
              <div className="card-footer">
                <div className="star-rating mt-n1">
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star"></i>
                </div>
                <div className="d-flex align-items-center">
                  <button className="border-0 bg-transparent btn-wishlist">
                    <i className="ai-heart"></i>
                    <span className="btn-tooltip">Wishlist</span>
                  </button>
                  <span className="btn-divider"></span>
                  <button className="border-0 bg-transparent btn-addtocart">
                    <i className="ai-shopping-cart"></i>
                    <span className="btn-tooltip">To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card card-product card-hover">
              <span className="badge badge-floating rounded-pill bg-success">
                New
              </span>
              <button className="border-0 bg-transparent card-img-top">
                <img src="img/shop/catalog/03.jpg" alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                  Accessories
                </button>
                <h3 className="fs-md fw-medium mb-2">
                  <button className="border-0 bg-transparent meta-link">
                    Military Cotton Cap
                  </button>
                </h3>
                <span className="text-heading fw-semibold">$28.00</span>
              </div>
              <div className="card-footer">
                <div className="star-rating mt-n1">
                  <i className="sr-star ai-star"></i>
                  <i className="sr-star ai-star"></i>
                  <i className="sr-star ai-star"></i>
                  <i className="sr-star ai-star"></i>
                  <i className="sr-star ai-star"></i>
                </div>
                <div className="d-flex align-items-center">
                  <button className="border-0 bg-transparent btn-wishlist">
                    <i className="ai-heart"></i>
                    <span className="btn-tooltip">Wishlist</span>
                  </button>
                  <span className="btn-divider"></span>
                  <button className="border-0 bg-transparent btn-addtocart">
                    <i className="ai-shopping-cart"></i>
                    <span className="btn-tooltip">To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card card-product card-hover">
              <button className="border-0 bg-transparent card-img-top">
                <img src="img/shop/catalog/09.jpg" alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                  Women's shoes
                </button>
                <h3 className="fs-md fw-medium mb-2">
                  <button className="border-0 bg-transparent meta-link">
                    Women Colorblock Sneakers
                  </button>
                </h3>
                <span className="text-heading fw-semibold">$154.00</span>
              </div>
              <div className="card-footer">
                <div className="star-rating mt-n1">
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star"></i>
                </div>
                <div className="d-flex align-items-center">
                  <button className="border-0 bg-transparent btn-wishlist">
                    <i className="ai-heart"></i>
                    <span className="btn-tooltip">Wishlist</span>
                  </button>
                  <span className="btn-divider"></span>
                  <button className="border-0 bg-transparent btn-addtocart">
                    <i className="ai-shopping-cart"></i>
                    <span className="btn-tooltip">To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card card-product card-hover">
              <span className="badge badge-floating rounded-pill bg-danger">
                Sale
              </span>
              <button className="border-0 bg-transparent card-img-top">
                <img src="img/shop/catalog/04.jpg" alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                  Electronics
                </button>
                <h3 className="fs-md fw-medium mb-2">
                  <button className="border-0 bg-transparent meta-link">
                    360 Degrees Camera
                  </button>
                </h3>
                <del className="fs-sm text-muted me-1">$120.40</del>
                <span className="text-heading fw-semibold">$98.75</span>
              </div>
              <div className="card-footer">
                <div className="star-rating mt-n1">
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star"></i>
                </div>
                <div className="d-flex align-items-center">
                  <button className="border-0 bg-transparent btn-wishlist">
                    <i className="ai-heart"></i>
                    <span className="btn-tooltip">Wishlist</span>
                  </button>
                  <span className="btn-divider"></span>
                  <button className="border-0 bg-transparent btn-addtocart">
                    <i className="ai-shopping-cart"></i>
                    <span className="btn-tooltip">To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card card-product card-hover">
              <button className="border-0 bg-transparent card-img-top">
                <img src="img/shop/catalog/07.jpg" alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                  Accessories
                </button>
                <h3 className="fs-md fw-medium mb-2">
                  <button className="border-0 bg-transparent meta-link">
                    3-Color Sun Stash Hat
                  </button>
                </h3>
                <span className="text-heading fw-semibold">$25.99</span>
              </div>
              <div className="card-footer">
                <div className="star-rating mt-n1">
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star"></i>
                  <i className="sr-star ai-star"></i>
                </div>
                <div className="d-flex align-items-center">
                  <button className="border-0 bg-transparent btn-wishlist">
                    <i className="ai-heart"></i>
                    <span className="btn-tooltip">Wishlist</span>
                  </button>
                  <span className="btn-divider"></span>
                  <button className="border-0 bg-transparent btn-addtocart">
                    <i className="ai-shopping-cart"></i>
                    <span className="btn-tooltip">To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card card-product card-hover">
              <span className="badge badge-floating rounded-pill bg-warning">
                Top rated
              </span>
              <button className="border-0 bg-transparent card-img-top">
                <img src="img/shop/catalog/06.jpg" alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                  Backpacks
                </button>
                <h3 className="fs-md fw-medium mb-2">
                  <button className="border-0 bg-transparent meta-link">
                    Vintage Travel Backpack
                  </button>
                </h3>
                <span className="text-heading fw-semibold">$82.00</span>
              </div>
              <div className="card-footer">
                <div className="star-rating mt-n1">
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                </div>
                <div className="d-flex align-items-center">
                  <button className="border-0 bg-transparent btn-wishlist">
                    <i className="ai-heart"></i>
                    <span className="btn-tooltip">Wishlist</span>
                  </button>
                  <span className="btn-divider"></span>
                  <button className="border-0 bg-transparent btn-addtocart">
                    <i className="ai-shopping-cart"></i>
                    <span className="btn-tooltip">To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div className="card card-product card-hover">
              <button className="border-0 bg-transparent card-img-top">
                <img src="img/shop/catalog/08.jpg" alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                  Electronics
                </button>
                <h3 className="fs-md fw-medium mb-2">
                  <button className="border-0 bg-transparent meta-link">
                    Speaker with Voice Control
                  </button>
                </h3>
                <span className="text-heading fw-semibold">$49.99</span>
              </div>
              <div className="card-footer">
                <div className="star-rating mt-n1">
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star"></i>
                </div>
                <div className="d-flex align-items-center">
                  <button className="border-0 bg-transparent btn-wishlist">
                    <i className="ai-heart"></i>
                    <span className="btn-tooltip">Wishlist</span>
                  </button>
                  <span className="btn-divider"></span>
                  <button className="border-0 bg-transparent btn-addtocart">
                    <i className="ai-shopping-cart"></i>
                    <span className="btn-tooltip">To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 d-none d-md-block d-lg-none mb-grid-gutter">
            <div className="card card-product card-hover">
              <button className="border-0 bg-transparent card-img-top">
                <img src="img/shop/catalog/05.jpg" alt="Product thumbnail" />
              </button>
              <div className="card-body">
                <button className="border-0 bg-transparent meta-link fs-xs mb-1">
                  Men's shoes
                </button>
                <h3 className="fs-md fw-medium mb-2">
                  <button className="border-0 bg-transparent meta-link">
                    Sport Running Sneakers
                  </button>
                </h3>
                <span className="text-heading fw-semibold">$140.00</span>
              </div>
              <div className="card-footer">
                <div className="star-rating mt-n1">
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star-filled active"></i>
                  <i className="sr-star ai-star"></i>
                </div>
                <div className="d-flex align-items-center">
                  <button className="border-0 bg-transparent btn-wishlist">
                    <i className="ai-heart"></i>
                    <span className="btn-tooltip">Wishlist</span>
                  </button>
                  <span className="btn-divider"></span>
                  <button className="border-0 bg-transparent btn-addtocart">
                    <i className="ai-shopping-cart"></i>
                    <span className="btn-tooltip">To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
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
