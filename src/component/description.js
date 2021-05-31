import React from "react";

const Description = () => {
  return (
    <div className="shadow container  p-5">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Education &amp; certification</h1>
          <p className="col-md-8 fs-4">
            University of Pennsylvania Degree Name "Computer Science Essentials
            for Software" graduation 2020 – 2022
          </p>
          <p className="col-md-8 fs-4">
            Universidad Central "Marta Abreu"​ de Las Villas Degree 2009 – 2014
          </p>
        </div>
        <div>
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Programming for the Web with JavaScript
                  </h5>
                  <p className="card-text">
                    a course of study offered by PennX, an online learning
                    initiative of the University of Pennsylvania.
                  </p>
                  <p>Valid Certificate ID e9e6073259374dda9d8fb0c0298bc3e8</p>
                  <a
                    href="https://courses.edx.org/certificates/e9e6073259374dda9d8fb0c0298bc3e8"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to validation
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Algorithms and Data Structures in C#
                  </h5>
                  <p className="card-text">
                    a course of study offered by Microsoft, an online learning
                    initiative of Microsoft Corporation.
                  </p>
                  <p>Valid Certificate ID cff61b6bf4a84293beb011510f762d3f</p>
                  <a
                    href="https://courses.edx.org/certificates/cff61b6bf4a84293beb011510f762d3f"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to validation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
