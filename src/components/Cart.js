import React from "react";
import { NavLink } from "react-router-dom";

function Cart() {
  return (
    <div className="offcanvas offcanvas-end" id="shoppingCart">
      <div className="offcanvas-header navbar-shadow px-4 mb-2">
        <h5 className="mt-1 mb-0">Your cart</h5>
        <button
          className="btn-close lead"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body p-4" data-simplebar>
        <div className="d-flex align-items-center mb-3">
          <a className="d-block flex-shrink-0" href="shop-single.html">
            <img
              className="rounded"
              src="img/demo/shop-homepage/thumbnails/05.jpg"
              alt="Product"
              width="60"
            />
          </a>
          <div className="w-100 ps-2 ms-1">
            <div className="d-flex align-items-center justify-content-between">
              <div className="me-3">
                <h4 className="nav-heading fs-md mb-1">
                  <a className="fw-medium" href="shop-single.html">
                    Smart Watch Series 5
                  </a>
                </h4>
                <div className="d-flex align-items-center fs-sm">
                  <span className="me-2">$364.99</span>
                  <span className="me-2">x</span>
                  <input
                    className="form-control form-control-sm px-2"
                    type="number"
                    style={{ maxWidth: "3.5rem" }}
                    min="1"
                    defaultValue="1"
                  />
                </div>
              </div>
              <div className="ps-3 border-start">
                <a
                  className="d-block text-danger text-decoration-none fs-xl"
                  href="#"
                  data-bs-toggle="tooltip"
                  title="Remove"
                >
                  <i className="ai-x-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <a className="d-block flex-shrink-0" href="shop-single.html">
            <img
              className="rounded"
              src="img/demo/shop-homepage/thumbnails/02.jpg"
              alt="Product"
              width="60"
            />
          </a>
          <div className="w-100 ps-2 ms-1">
            <div className="d-flex align-items-center justify-content-between">
              <div className="me-3">
                <h4 className="nav-heading fs-md mb-1">
                  <a className="fw-medium" href="shop-single.html">
                    Running Sneakers, Collection
                  </a>
                </h4>
                <div className="d-flex align-items-center fs-sm">
                  <span className="me-2">$145.00</span>
                  <span className="me-2">x</span>
                  <input
                    className="form-control form-control-sm px-2"
                    type="number"
                    style={{ maxWidth: "3.5rem" }}
                    min="1"
                    defaultValue="1"
                  />
                </div>
              </div>
              <div className="ps-3 border-start">
                <a
                  className="d-block text-danger text-decoration-none fs-xl"
                  href="#"
                  data-bs-toggle="tooltip"
                  title="Remove"
                >
                  <i className="ai-x-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <a className="d-block flex-shrink-0" href="shop-single.html">
            <img
              className="rounded"
              src="img/demo/shop-homepage/thumbnails/06.jpg"
              alt="Product"
              width="60"
            />
          </a>
          <div className="w-100 ps-2 ms-1">
            <div className="d-flex align-items-center justify-content-between">
              <div className="me-3">
                <h4 className="nav-heading fs-md mb-1">
                  <a className="fw-medium" href="shop-single.html">
                    Wireless Bluetooth Headset
                  </a>
                </h4>
                <div className="d-flex align-items-center fs-sm">
                  <span className="me-2">$258.00</span>
                  <span className="me-2">x</span>
                  <input
                    className="form-control form-control-sm px-2"
                    type="number"
                    style={{ maxWidth: "3.5rem" }}
                    min="1"
                    defaultValue="1"
                  />
                </div>
              </div>
              <div className="ps-3 border-start">
                <a
                  className="d-block text-danger text-decoration-none fs-xl"
                  href="#"
                  data-bs-toggle="tooltip"
                  title="Remove"
                >
                  <i className="ai-x-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-footer d-block border-top px-4 mb-2">
        <div className="d-flex justify-content-between mb-4">
          <span>Total:</span>
          <span className="h6 mb-0">$776.99</span>
        </div>
        <NavLink to="checkout" className="btn btn-primary btn-sm d-block w-100">
          <i className="ai-credit-card fs-base me-2"></i>Checkout
        </NavLink>
      </div>
    </div>
  );
}

export default Cart;
