import React from "react";

function Categories() {
  return (
    <div className="sidebar-enabled">
      <div className="container">
        <div className="row">
          <div className="sidebar col-lg-3 pt-lg-5">
            <div className="offcanvas offcanvas-collapse" id="shop-sidebar">
              <div className="offcanvas-header navbar-shadow px-4 mb-3">
                <h5 className="mt-1 mb-0">Refine your selection</h5>
                <button
                  className="btn-close lead"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="offcanvas-body px-4 pt-3 pt-lg-0 ps-lg-0 pe-lg-2 pe-xl-4"
                data-simplebar
              >
                <div className="widget widget-categories mb-5">
                  <h3 className="widget-title">Categories</h3>
                  <ul id="categories">
                    <li>
                      <a
                        className="widget-link"
                        href="#clothing"
                        data-bs-toggle="collapse"
                      >
                        Clothing
                        <small className="text-muted ps-1 ms-2">235</small>
                      </a>
                      <ul
                        className="collapse show"
                        id="clothing"
                        data-bs-parent="#categories"
                      >
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            View all
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Blazers &amp; Suits
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Cardigans
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Dresses
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Hoodie &amp; Sweatshirts
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Jackets &amp; Coats
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Jeans
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Lingerie
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Sportswear
                          </button>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="widget-link collapsed"
                        href="#shoes"
                        data-bs-toggle="collapse"
                      >
                        Shoes<small className="text-muted ps-1 ms-2">210</small>
                      </a>
                      <ul
                        className="collapse"
                        id="shoes"
                        data-bs-parent="#categories"
                      >
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            View all
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Athletic shoes
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Balerinas &amp; Flats
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Boots
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Clogs &amp; Mules
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Flip Flops
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Loafers
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Sandals
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Sneakers
                          </button>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="widget-link collapsed"
                        href="#electronics"
                        data-bs-toggle="collapse"
                      >
                        Electronics
                        <small className="text-muted ps-1 ms-2">197</small>
                      </a>
                      <ul
                        className="collapse"
                        id="electronics"
                        data-bs-parent="#categories"
                      >
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            View all
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Computers &amp; Accessories
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            TV, Video &amp; Audio
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Smartphones &amp; Tablets
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Cameras, Photo &amp; Video
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Headphones
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Wearable Electronics
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Printers &amp; Ink
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Video Games
                          </button>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="widget-link collapsed"
                        href="#accessories"
                        data-bs-toggle="collapse"
                      >
                        Accessories
                        <small className="text-muted ps-1 ms-2">124</small>
                      </a>
                      <ul
                        className="collapse"
                        id="accessories"
                        data-bs-parent="#categories"
                      >
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            View all
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Bags
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Belts
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Hats
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Jewelry
                          </button>
                        </li>
                        <li>
                          <button className="widget-link border-0 bg-transparent">
                            Cosmetics
                          </button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="widget mt-n1 mb-5">
                  <h3 className="widget-title">Price</h3>
                  <div className="px-2">
                    <div
                      className="range-slider"
                      data-start-min="250"
                      data-start-max="680"
                      data-min="0"
                      data-max="1000"
                      data-step="1"
                    >
                      <div className="range-slider-ui"></div>
                      <div className="d-flex">
                        <div className="w-50 pe-2 me-2">
                          <div className="input-group input-group-sm">
                            <span className="input-group-text">$</span>
                            <input
                              className="form-control range-slider-value-min"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="w-50 ps-2">
                          <div className="input-group input-group-sm">
                            <span className="input-group-text">$</span>
                            <input
                              className="form-control range-slider-value-max"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget mb-5">
                  <h3 className="widget-title">Brand</h3>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="adidas"
                      defaultChecked
                    />
                    <label
                      className="form-check-label text-nav"
                      htmlFor="adidas"
                    >
                      Adidas<span className="fs-xs text-muted ms-2">425</span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="bilabong"
                    />
                    <label
                      className="form-check-label text-nav"
                      htmlFor="bilabong"
                    >
                      Bilabong<span className="fs-xs text-muted ms-2">27</span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="klein"
                    />
                    <label
                      className="form-check-label text-nav"
                      htmlFor="klein"
                    >
                      Calvin Klein
                      <span className="fs-xs text-muted ms-2">365</span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="electrolux"
                    />
                    <label
                      className="form-check-label text-nav"
                      htmlFor="electrolux"
                    >
                      Electrolux
                      <span className="fs-xs text-muted ms-2">56</span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="motorolla"
                    />
                    <label
                      className="form-check-label text-nav"
                      htmlFor="motorolla"
                    >
                      Motorolla
                      <span className="fs-xs text-muted ms-2">104</span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="nb"
                    />
                    <label className="form-check-label text-nav" htmlFor="nb">
                      New Balance
                      <span className="fs-xs text-muted ms-2">197</span>
                    </label>
                  </div>
                </div>
                <div className="widget mb-5">
                  <h3 className="widget-title">Size</h3>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="xs"
                    />
                    <label className="form-check-label text-nav" htmlFor="xs">
                      XS<span className="fs-xs text-muted ms-2">38</span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="s"
                      defaultChecked
                    />
                    <label className="form-check-label text-nav" htmlFor="s">
                      S<span className="fs-xs text-muted ms-2">173</span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="m"
                    />
                    <label className="form-check-label text-nav" htmlFor="m">
                      M<span className="fs-xs text-muted ms-2">226</span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="l"
                    />
                    <label className="form-check-label text-nav" htmlFor="l">
                      L<span className="fs-xs text-muted ms-2">345</span>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="xl"
                    />
                    <label className="form-check-label text-nav" htmlFor="xl">
                      XL<span className="fs-xs text-muted ms-2">104</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 content py-4 mb-2 mb-sm-0 pb-sm-5">
            <div className="d-flex justify-content-between align-items-center py-3 mb-3">
              <div className="d-flex justify-content-center align-items-center">
                <select
                  className="form-select me-2"
                  style={{ width: "15.25rem" }}
                >
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
                <div className="fs-sm text-nowrap ps-1 mb-1">
                  products per page
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/01.jpg"
                      alt="Product thumbnail"
                    />
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
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/02.jpg"
                      alt="Product thumbnail"
                    />
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
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <span className="badge badge-floating badge-pill bg-success">
                    New
                  </span>
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/03.jpg"
                      alt="Product thumbnail"
                    />
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
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <span className="badge badge-floating badge-pill bg-danger">
                    Sale
                  </span>
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/04.jpg"
                      alt="Product thumbnail"
                    />
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
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/05.jpg"
                      alt="Product thumbnail"
                    />
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
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/06.jpg"
                      alt="Product thumbnail"
                    />
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
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/07.jpg"
                      alt="Product thumbnail"
                    />
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
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/08.jpg"
                      alt="Product thumbnail"
                    />
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
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/09.jpg"
                      alt="Product thumbnail"
                    />
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
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/10.jpg"
                      alt="Product thumbnail"
                    />
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
                    <span className="text-heading fw-semibold">
                      Out of stock
                    </span>
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
                      <a className="btn-details">
                        <i className="ai-arrow-right"></i>
                        <span className="btn-tooltip">Details</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/11.jpg"
                      alt="Product thumbnail"
                    />
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
              <div className="col-md-4 col-sm-6 mb-grid-gutter">
                <div className="card card-product card-hover">
                  <button className="card-img-top border-0 bg-transparent">
                    <img
                      src="img/shop/catalog/12.jpg"
                      alt="Product thumbnail"
                    />
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
                <div className="fs-sm text-nowrap ps-1 mb-1">
                  products per page
                </div>
              </div>
              <nav className="mb-4" aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" aria-label="Previous">
                      <i className="ai-chevron-left"></i>
                    </a>
                  </li>
                  <li className="page-item d-sm-none">
                    <span className="page-link page-link-static">2 / 10</span>
                  </li>
                  <li className="page-item d-none d-sm-block">
                    <a className="page-link">1</a>
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
                    <a className="page-link">3</a>
                  </li>
                  <li className="page-item d-none d-sm-block">
                    <a className="page-link">4</a>
                  </li>
                  <li className="page-item d-none d-sm-block">...</li>
                  <li className="page-item d-none d-sm-block">
                    <a className="page-link">10</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" aria-label="Next">
                      <i className="ai-chevron-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
