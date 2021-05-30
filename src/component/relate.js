import React from "react";

const Relate = () => {
  return (
    <div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="https://creativetimblog.com/blog/wp-content/uploads/2019/02/opt_blk_react_thumbnail.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">How did I build this!</h1>
            <p>
              Try to use a lot of Full Stack technologies. The applications is
              interpreted by babel and packaged with webpack. Eslint reviews the
              details of the code, ensuring that it meets the writing standards
              and updates of ECMAScript 2020.
            </p>
            <p>
              Webpack handles 'JS' 'CSS' and 'JPEG' or 'PNG' files, then
              generates the files for production. They are executed by an
              'ExpressJS' server that manages the API that manipulates the
              application data in the backEnd.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Download tha App from Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relate;
