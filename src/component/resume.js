import React from "react";

import avatar from "../img/avatar.png";

const Resume = () => {
  return (
    <>
      <div>
        <div class="shadow-lg bg-dark text-secondary px-4 py-5 text-center">
          <div class="container">
            <div class="row g-0">
              <div class="col-sm-6 col-md-4 text-end">
                <img
                  class="d-block mx-auto mb-4 rounded float-end"
                  src={avatar}
                  alt=""
                  width="50"
                  height="50"
                />
              </div>
              <div class="col-6 col-md-8 text-start">
                <h1 class="display-5 fw-bold"> &lt;Daniel Perez /&gt;</h1>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">
              My professional goals are in line with the needs of evolving and
              improving within the company where I develop my professional work.
              I am committed to maintaining professionalism and creating
              innovative programs. I consider myself a man who takes risks in
              situations that require it, for the benefit of the company, in
              search of solutions.
            </p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
                Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
