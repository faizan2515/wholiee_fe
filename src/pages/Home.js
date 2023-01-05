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
          {products.map((product, index) => {
            if (index > 7) return null;

            return (
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
            );
          })}
        </div>
      </section>
      <section className="container py-5 mt-3 my-md-0 py-md-6 py-lg-7">
        <div className="row">
          <div className="col-12">
            <img
              src="img/logo/sale-banner.jpg"
              className="rounded-3"
              alt="Sale"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
