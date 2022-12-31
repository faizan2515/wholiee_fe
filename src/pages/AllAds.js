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
              <button className="page-link" aria-label="Previous">
                <i className="ai-chevron-left"></i>
              </button>
            </li>
            <li className="page-item d-sm-none">
              <span className="page-link page-link-static">2 / 10</span>
            </li>
            <li className="page-item d-none d-sm-block">
              <button className="page-link">1</button>
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
              <button className="page-link">3</button>
            </li>
            <li className="page-item d-none d-sm-block">
              <button className="page-link">4</button>
            </li>
            <li className="page-item d-none d-sm-block">...</li>
            <li className="page-item d-none d-sm-block">
              <button className="page-link">10</button>
            </li>
            <li className="page-item">
              <button className="page-link" aria-label="Next">
                <i className="ai-chevron-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AllAds;
