const Subscriber = () => {
  return (
    <div className="subscriber-main py-4 mt-4">
      <div className="container">
        <div className="subscriber-bg">
          <div className="row align-items-center justify-content-center g-4 mt-3">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="subscriber-info">
                <h2 className="fs-1 fw-bold text-white mb-4">
                  Never Wants to Miss Any <span>Job News?</span>
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email Address..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text">Subscriber</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
