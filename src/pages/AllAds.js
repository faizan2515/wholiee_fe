import React from "react";

function AllAds() {
  return (
    <div className="container py-4 mb-2 mb-sm-0 pb-sm-5">
      <div className="d-flex justify-content-between align-items-center py-3 mb-3">
        <div className="d-flex justify-content-center align-items-center">
          <select className="form-select me-2" style={{ width: "15.25rem" }}>
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="newness">Sort by newness</option>
            <option value="price: low to high">
              Sort by price: low to high
            </option>
            <option value="price: high to low">
              Sort by price: high to low
            </option>
          </select>
          <div className="d-none d-sm-block fs-sm text-nowrap ps-1 mb-1">
            of 135 products
          </div>
        </div>
        <div className="d-none d-lg-flex justify-content-center align-items-center">
          <label className="pe-1 me-2 mb-0 form-label px-0">Show</label>
          <select className="form-select me-2" style={{ width: "5rem" }}>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
            <option value="60">60</option>
          </select>
          <div className="fs-sm text-nowrap ps-1 mb-1">products per page</div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/01.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Men's clothing
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  Simple Cotton Gray T-shirt
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/02.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Electronics
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  Wireless Headphones
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <span className="badge badge-floating badge-pill bg-success">
              New
            </span>
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/03.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Accessories
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  Military Cotton Cap
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <span className="badge badge-floating badge-pill bg-danger">
              Sale
            </span>
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/04.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Electronics
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  360 Degrees Camera
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/05.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Men's shoes
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  Sport Running Sneakers
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/06.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Backpacks
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  Vintage Travel Backpack
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/07.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Accessories
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  3-Color Sun Stash Hat
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/08.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Electronics
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  Speaker with Voice Control
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/09.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Women's shoes
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  Women Colorblock Sneakers
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/10.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Accessories
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  Polarized Sunglasses
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-details" href="shop-single.html">
                  <i className="ai-arrow-right"></i>
                  <span className="btn-tooltip">Details</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/11.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Men's shoes
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  Sport Running Shoes
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
          <div className="card card-product card-hover">
            <a className="card-img-top" href="shop-single.html">
              <img src="img/shop/catalog/12.jpg" alt="Product thumbnail" />
            </a>
            <div className="card-body">
              <a className="meta-link fs-xs mb-1" href="#">
                Electronics
              </a>
              <h3 className="fs-md fw-medium mb-2">
                <a className="meta-link" href="shop-single.html">
                  Smart Watch Series 5
                </a>
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
                <a className="btn-wishlist" href="#">
                  <i className="ai-heart"></i>
                  <span className="btn-tooltip">Wishlist</span>
                </a>
                <span className="btn-divider"></span>
                <a className="btn-addtocart" href="#">
                  <i className="ai-shopping-cart"></i>
                  <span className="btn-tooltip">To Cart</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-md-flex justify-content-between align-items-center pt-3 pb-2">
        <div className="d-flex justify-content-center align-items-center mb-4">
          <label className="pe-1 me-2 mb-0 form-label px-0">Show</label>
          <select className="form-select me-2" style={{ width: "5rem" }}>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
            <option value="60">60</option>
          </select>
          <div className="fs-sm text-nowrap ps-1 mb-1">products per page</div>
        </div>
        <nav className="mb-4" aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <i className="ai-chevron-left"></i>
              </a>
            </li>
            <li className="page-item d-sm-none">
              <span className="page-link page-link-static">2 / 10</span>
            </li>
            <li className="page-item d-none d-sm-block">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li
              className="page-item active d-none d-sm-block"
              aria-current="page"
            >
              <span className="page-link">
                2<span className="visually-hidden">(current)</span>
              </span>
            </li>
            <li className="page-item d-none d-sm-block">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item d-none d-sm-block">
              <a className="page-link" href="#">
                4
              </a>
            </li>
            <li className="page-item d-none d-sm-block">...</li>
            <li className="page-item d-none d-sm-block">
              <a className="page-link" href="#">
                10
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <i className="ai-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AllAds;
