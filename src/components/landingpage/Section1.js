const Section1 = () => {
  return (
    <section
      className="pt-5 pb-5"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80)",
        backgroundSize: "cover",
      }}
    >
      <div className="container pt-5 pb-5">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6">
            <h3 className="display-3 font-weight-bold text-dark" data-aos="fade-up">
              Start building beautiful websites
            </h3>
          </div>
          <div className="col-md-5" data-aos="fade-up">
            <div id="carouselExampleTestimonials" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row justify-content-center d-flex  ">
                      <div className="col-md-12 card px-5 text-dark py-5">
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <div className="d-flex mr-2">
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                          </div>
                        </div>
                        <blockquote className="blockquote blockquote-reverse mt-4">
                          <p className="lead font-weight-bold mt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing eliterat sed".</p>
                          <div className="mt-3 d-flex align-items-center pt-2">
                            <div className="mr-3">
                              <img
                                className="d-block img-fluid rounded-circle"
                                src="https://via.placeholder.com/40x40/5fa9f8/ffffff "
                                srcSet="https://via.placeholder.com/120x120/5fa9f8/ffffff 2x"
                                alt="user"
                              />
                            </div>
                            <div className="d-block">
                              <p className="mb-0">User Name</p>
                              <p className="small">Designer</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container-fluid">
                    <div className="row   justify-content-center d-flex  ">
                      <div className="col-md-12  card px-5 text-dark py-5">
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <div className="d-flex mr-2">
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                          </div>
                        </div>
                        <blockquote className="blockquote blockquote-reverse mt-4">
                          <p className="lead font-weight-bold mt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing eliterat sed".</p>
                          <div className="mt-3 d-flex align-items-center pt-2">
                            <div className="mr-3">
                              <img
                                className="d-block img-fluid rounded-circle"
                                src="https://via.placeholder.com/40x40/5fa9f8/ffffff "
                                srcSet="https://via.placeholder.com/120x120/5fa9f8/ffffff 2x"
                                alt="user"
                              />
                            </div>
                            <div className="d-block">
                              <p className="mb-0">User Name</p>
                              <p className="small">Designer</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active">
                  <div className="container-fluid">
                    <div className="row   justify-content-center d-flex  ">
                      <div className="col-md-12  card px-5 text-dark py-5">
                        <div className="d-flex justify-content-center justify-content-lg-start">
                          <div className="d-flex mr-2">
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                            <i className="fas fa-star text-warning mr-1"></i>
                          </div>
                        </div>
                        <blockquote className="blockquote blockquote-reverse mt-4">
                          <p className="lead font-weight-bold mt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing eliterat sed".</p>
                          <div className="mt-3 d-flex align-items-center pt-2">
                            <div className="mr-3">
                              <img
                                className="d-block img-fluid rounded-circle"
                                src="https://via.placeholder.com/40x40/5fa9f8/ffffff "
                                srcSet="https://via.placeholder.com/120x120/5fa9f8/ffffff 2x"
                                alt="user"
                              />
                            </div>
                            <div className="d-block">
                              <p className="mb-0">User Name</p>
                              <p className="small">Designer</p>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;