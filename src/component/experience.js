import React from "react";

const Experience = () => {
  return (
    <div class="container">
      <div class="shadow-lg p-5 m-5 bg-body rounded text-center">
        <h1 class="display-5 fw-bold text-dark">
          The server configuration for this example!
        </h1>
        <div class="col-lg-6 mx-auto">
          <div class="container">
            <div class="row">
              <div class="col order-first">
                <p class="mb-4">
                  The app runs on AWS EC2, where a public ip address was
                  assigned and the domain was purchased.
                </p>
              </div>
              <div class="col">
                <p class="mb-4">
                  The addressing configuration was implemented with NGinx and
                  SSL was generated with LetsEncrypt.
                </p>
              </div>
              <div class="col order-last">
                <p>
                  I also have experience in Heroku, BlueHost, GoDaddy, Ionos.
                </p>
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            >
              Custom button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
