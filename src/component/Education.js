import React from "react";

//icos
//import { Icon } from "@iconify/react";
//import logoElectron from "@iconify-icons/ion/logo-electron";

// npm install --save-dev @iconify/react @iconify-icons/ion
import { Icon } from "@iconify/react";

import logoElectron from "@iconify-icons/ion/logo-electron";

const Description = () => {
  return (
    <div className="container mt-5 py-4">
      <header className="pb-3 mb-4 border-bottom">
        <Icon icon={logoElectron} width="50" height="50" />
        <span className="fs-4">Education &amp; certification</span>
      </header>

      <div className="p-5 mb-4 bg-light border rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Education</h1>
          <p className="col-md-8 fs-4">
            University of Pennsylvania Degree Name Computer Science Essentials
            for Software graduation 2020 – 2022
          </p>
          <p className="col-md-8 fs-4">
            Universidad Central Marta Abreu​ de Las Villas Degree 2009 – 2014
          </p>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6  mb-5">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Programming for the Web with JavaScript</h2>

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
        <div className="col-md-6  mb-5">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2> Algorithms and Data Structures in C#</h2>
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
  );
};

export default Description;
