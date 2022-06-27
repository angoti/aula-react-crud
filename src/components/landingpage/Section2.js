import NovoLead from "./NovoLead";

const Section2 = () => {
  return (
    <section className="ov-hidden pt-5 pb-5 position-relative">
      {/* <!--video component --> */}
      <video autoPlay={true} muted={true} loop={true} id="bgvid">
        <source src="http://casagiacometti.com/rain.webm" type="video/webm" />
      </video>
      <div className="bg-overlay"></div>

      <div className="container pt-5 pb-5 position-relative">
        <div className="row d-flex justify-content-between pt-lg-5 align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-7 text-center text-lg-left mb-5 mb-lg-0">
            <h1 className="display-3 font-weight-bold text-white" data-aos="fade-up">
              Build better websites faster
            </h1>
            <div className="my-4" data-aos="fade-up">
              <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing eliterat sed sem sagittis cursus.</p>
            </div>
            <div className="d-flex justify-content-center justify-content-lg-start" data-aos="fade-up">
              <div className="d-flex mr-2">
                <i className="fas fa-star fa-lg text-warning m-1"></i>
                <i className="fas fa-star fa-lg text-warning m-1"></i>
                <i className="fas fa-star fa-lg text-warning m-1"></i>
                <i className="fas fa-star fa-lg text-warning m-1"></i>
                <i className="fas fa-star fa-lg text-warning m-1"></i>
              </div>
              <span className="text-white">(Average score: 4.9/5)</span>
            </div>
          </div>
          <div className="col">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-md-10">
                <NovoLead />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;