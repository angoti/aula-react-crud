const Section3 = () => {
  return (
    <section className="mb-0 mt-0">
      <div className="footer text-white">
        <div className="   bg-dark pt-5 pb-5">
          <div className="container">
            <div className="row mb-5">
              <div className="col">
                <div
                  className="card card-body border-0 mb-0 bg-info text-light px-md-5 py-md-4 shadow-lg"
                  style={{ overflow: "hidden" }}
                  data-aos="zoom-out-down"
                >
                  <div className="position-relative d-flex flex-column py-md-2 flex-md-row justify-content-between align-items-center">
                    <div className="h3 text-center mb-md-0">Start building beautiful websites</div>
                    <a href="#" className="btn btn-lg btn-light py-md-3 px-md-5 text-info font-weight-bold">
                      GET FREE TEMPLATE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-3">
                <a href="#">
                  <svg className="d-block mb-4" width="36" height="36" viewBox="0 0 612 612" xmlns="http://www.w3.org/2000/svg" focusable="false">
                    <path
                      fill="currentColor"
                      d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"
                    ></path>
                  </svg>
                </a>
                <address className="color-light-20">
                  1600 Amphitheatre Parkway
                  <br /> Mountain View, CA 94043
                </address>
                <ul className="list-unstyled list-light">
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <h4 className="my-2">Product</h4>
                <ul className="list-unstyled list-light">
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Customers</a>
                  </li>
                  <li>
                    <a href="#">Store</a>
                  </li>
                </ul>
              </div>
              <br style={{ clear: "both" }} className="hidden-sm-up" />
              <div className="col-xs-6 col-sm-3">
                <h4 className="my-2">Company</h4>
                <ul className="list-unstyled list-light">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-sm-3">
                <h4 className="my-2">Connect</h4>
                <ul className="list-unstyled list-light">
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Social</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="row f-flex justify-content-center">
              <div className="col text-center  text-secondary my-1">
                <p className="mt-2  text-white">
                  {" "}
                  © Copyright 2019 • All Rights Reserved |
                  <a className=" " href="#">
                    Disclaimer
                  </a>{" "}
                  |
                  <a className=" " href="#">
                    Contact
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
