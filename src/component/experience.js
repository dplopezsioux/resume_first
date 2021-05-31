import React from "react";

import * as Icon from "react-bootstrap-icons";

const Experience = () => {
  return (
    <div className="container">
      <div className="shadow-lg p-5 m-5 bg-body rounded text-center">
        <h1 className="display-6 fw-bold text-dark">
          The server configuration for this example!
        </h1>
        <div className="col-lg-6 mx-auto">
          <div className="container">
            <div className="row">
              <div className="col order-first">
                <p className="mb-4">
                  <Icon.Server />
                  The app runs on{" "}
                  <a href="#" className="link-light">
                    AWS
                  </a>
                  EC2, where a public ip address was assigned and the domain was
                  purchased.
                </p>
              </div>
              <div className="col">
                <p className="mb-4">
                  The addressing configuration was implemented with
                  <Icon.Bricks />
                  <a href="https://unit.nginx.org/" className="link-info">
                    {" "}
                    NGinx{" "}
                  </a>{" "}
                  and SSL was generated with <Icon.Key />
                  <a href="https://letsencrypt.org/ " className="link-info">
                    {" "}
                    LetsEncrypt
                  </a>
                  .
                </p>
              </div>
              <div className="col order-last">
                <p>
                  I also have experience in Heroku, BlueHost, GoDaddy, Ionos.
                </p>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <div className="btn-group">
              <a
                href="https://github.com/dplopezsioux/resume"
                className="btn btn-primary"
                aria-current="page"
                target="blank"
              >
                Active link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
