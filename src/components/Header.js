import { NavLink } from "react-router-dom";
import Cart from "./Cart";

function Header() {
  return (
    <>
      <Cart />
      <header className="header">
        <div
          className="navbar navbar-expand-lg navbar-light bg-light navbar-shadow navbar-sticky"
          data-scroll-header
          data-fixed-element
        >
          <div className="container px-0 px-xl-3">
            <button
              className="navbar-toggler ms-n2 me-4"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#primaryMenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink
              to="/"
              className="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
            >
              <p className="m-0 text-primary">Wholiee</p>
              {/* <img
                className="d-none d-lg-block"
                src="img/logo/logo-dark.png"
                alt="Around"
                width="153"
              />
              <img
                className="d-lg-none"
                src="img/logo/logo-icon.png"
                alt="Around"
                width="58"
              /> */}
            </NavLink>

            <div className="d-flex align-items-center order-lg-3 ms-lg-auto">
              <div className="navbar-tool me-2">
                <button
                  className="navbar-tool-icon-box border-0 bg-transparent"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#shoppingCart"
                >
                  <i className="ai-shopping-cart"></i>
                  <span className="navbar-tool-badge">3</span>
                </button>
              </div>
            </div>
            <div
              className="offcanvas offcanvas-collapse order-lg-2"
              id="primaryMenu"
            >
              <div className="offcanvas-header navbar-shadow">
                <h5 className="mt-1 mb-0">Menu</h5>
                <button
                  className="btn-close lead"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body justify-content-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="all-ads"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      All Ads
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="categories"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="about-us"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="contact-us"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
