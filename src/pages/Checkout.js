import React from "react";
import { useApp } from "../withAppProvider";

function Checkout() {
  const { cartItems, setCartItems } = useApp();
  return (
    <form className="sidebar-enabled sidebar-end needs-validation" noValidate>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 content py-4">
            <h1 className="mb-3 pb-4">Checkout</h1>
            <h2 className="h3 pb-3">Billing details</h2>
            <div className="row mb-4">
              <div className="col-sm-6 mb-3 pb-1">
                <label className="form-label" htmlFor="ch-fn">
                  First name<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="ch-fn"
                  required
                />
              </div>
              <div className="col-sm-6 mb-3 pb-1">
                <label className="form-label" htmlFor="ch-ln">
                  Last names<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="ch-ln"
                  required
                />
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="ch-company">
                  Company name
                </label>
                <input className="form-control" type="text" id="ch-company" />
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="ch-country">
                  Country<sup className="text-danger ms-1">*</sup>
                </label>
                <select className="form-select" id="ch-country" required>
                  <option value="" selected disabled hidden>
                    Choose country
                  </option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="Francee">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="USA">USA</option>
                </select>
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="ch-address">
                  Street address<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="ch-address"
                  placeholder="House number and street name"
                  required
                />
              </div>
              <div className="col-12 mb-3 pb-1">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="ch-city">
                  Town / City<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="ch-city"
                  required
                />
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="ch-county">
                  County
                </label>
                <input className="form-control" type="text" id="ch-county" />
              </div>
              <div className="col-12 mb-3 pb-1">
                <label className="form-label" htmlFor="ch-postcode">
                  Postcode<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="ch-postcode"
                  required
                />
              </div>
              <div className="col-sm-6 mb-3 pb-1">
                <label className="form-label" htmlFor="ch-phone">
                  Phone<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="ch-phone"
                  required
                />
              </div>
              <div className="col-sm-6 mb-3 pb-1">
                <label className="form-label" htmlFor="ch-email">
                  Email address<sup className="text-danger ms-1">*</sup>
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="ch-email"
                  required
                />
              </div>
            </div>
            <h2 className="h3 pb-3">Additional information</h2>
            <div className="mb-3 pb-1 pb-3 pb-lg-5">
              <label className="form-label" htmlFor="ch-order-notes">
                Order notes
              </label>
              <textarea
                className="form-control"
                id="ch-order-notes"
                rows="5"
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </div>
          <div className="col-lg-4 sidebar bg-secondary pt-5 ps-lg-4 pb-md-2">
            <div className="ps-lg-4 mb-3 pb-5">
              <h2 className="h4 pb-3">Your cart</h2>
              {cartItems.map((item) => (
                <div className="d-flex align-items-center mb-3" key={item.id}>
                  <img
                    className="rounded"
                    src={item.Product_Image}
                    alt="Product"
                    width="60"
                  />
                  <div className="w-100 ps-2 ms-1">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="me-3">
                        <h4 className="nav-heading fs-md mb-1">
                          {item.Product_name}
                        </h4>
                        <div className="d-flex align-items-center fs-sm">
                          <span className="me-2">
                            Rs. {item.Product_Per_Price}
                          </span>
                          <span className="me-2">x</span>
                          <input
                            className="form-control form-control-sm px-2"
                            type="number"
                            style={{ maxWidth: "3.5rem" }}
                            min="1"
                            value={item.quantity}
                            onChange={(event) => {
                              setCartItems((cart) =>
                                cart.map((it) =>
                                  it.id === item.id
                                    ? {
                                        ...it,
                                        quantity: parseInt(event.target.value),
                                      }
                                    : it
                                )
                              );
                            }}
                          />
                        </div>
                      </div>
                      <div className="ps-3 border-start">
                        <button
                          className="d-block text-danger text-decoration-none fs-xl border-0 bg-transparent"
                          data-bs-toggle="tooltip"
                          title="Remove"
                          onClick={() => {
                            setCartItems((prev) =>
                              prev.filter((it) => it.id !== item.id)
                            );
                          }}
                        >
                          <i className="ai-x-circle"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {cartItems.length === 0 && (
                <h4 className="text-center my-2">No item in the cart</h4>
              )}
              <hr className="mt-0 mb-4" />
              <div className="d-flex justify-content-between mb-3">
                <span className="h6 mb-0">Total:</span>
                <span className="h6 mb-0">
                  Rs.{" "}
                  {cartItems.reduce(
                    (prev, curr) =>
                      prev +
                      parseFloat(curr.Product_Per_Price) *
                        parseInt(curr.quantity),
                    0
                  )}
                </span>
              </div>
              <div
                className="accordion pt-4 mb-grid-gutter"
                id="payment-methods"
              >
                <div className="accordion-item bg-white shadow">
                  <h2 className="accordion-header" id="heading-3">
                    <button
                      className="accordion-button no-indicator collapsed"
                      type="button"
                    >
                      <div
                        className="form-check w-100"
                        data-bs-toggle="collapse"
                        data-bs-target="#cash"
                        aria-expanded="false"
                        aria-controls="cash"
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          id="cash-radio"
                          name="payment_method"
                          defaultChecked
                        />
                        <label
                          className="form-check-label d-flex align-items-center fs-base text-heading mb-0 mt-1"
                          htmlFor="cash-radio"
                        >
                          Cash on delivery
                        </label>
                      </div>
                    </button>
                  </h2>
                  <div
                    className="accordion-collapse collapse show"
                    id="cash"
                    aria-labelledby="heading-3"
                    data-bs-parent="#payment-methods"
                  >
                    <div className="accordion-body">
                      <p className="fs-ms mb-0">
                        You have selected to pay with cash upon delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn btn-primary d-block w-100" type="submit">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
