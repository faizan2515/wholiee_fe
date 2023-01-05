import React from "react";
import { Container, Row } from "react-bootstrap";

function AllAds() {
  return (
    <Container className="my-5">
      <h1 className="mb-3">All Products</h1>
      <Row>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/01.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Men's clothing
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/02.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Electronics
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <span className="badge badge-floating badge-pill bg-success">
              New
            </span>
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/03.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Accessories
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <span className="badge badge-floating badge-pill bg-danger">
              Sale
            </span>
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/04.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Electronics
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/05.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Men's shoes
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/06.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Backpacks
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/07.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Accessories
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/08.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Electronics
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/09.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Women's shoes
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/10.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Accessories
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
                  Polarized Sunglasses
                </button>
              </h3>
              <span className="text-heading fw-semibold">Out of stock</span>
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-details border-0 bg-transparent">
                  <i className="ai-arrow-right"></i>
                  <span className="btn-tooltip">Details</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/11.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Men's shoes
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
                  Sport Running Shoes
                </button>
              </h3>
              <span className="text-heading fw-semibold">$127.00</span>
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <button className="card-img-top border-0 bg-transparent">
              <img src="img/shop/catalog/12.jpg" alt="Product thumbnail" />
            </button>
            <div className="card-body">
              <button className="meta-link fs-xs mb-1 border-0 bg-transparent">
                Electronics
              </button>
              <h3 className="fs-md fw-medium mb-2">
                <button className="meta-link border-0 bg-transparent">
                  Smart Watch Series 5
                </button>
              </h3>
              <span className="text-heading fw-semibold">$349.99</span>
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
                <button className="btn-wishlist border-0 bg-transparent">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </button>
                <span className="btn-divider"></span>
                <button className="btn-addtocart border-0 bg-transparent">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default AllAds;
