import React from "react";

//ico
// npm install --save-dev @iconify/react @iconify-icons/ant-design
import { Icon } from "@iconify/react";
import messageTwotone from "@iconify-icons/ant-design/message-twotone";

//////

const FormEmail = () => {
  return (
    <div className="p-5 mt-5 bg-dark">
      <div className="container">
        <header className="pb-3 mb-4 border-bottom">
          <Icon icon={messageTwotone} color="#ffffff" width="50" height="50" />
          <span className="fs-1 text-light">Contact </span>
        </header>
        <div className="h-100 p-5 bg-light border rounded-3">
          <form onSubmit={}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Example textarea</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-3">
              <button type="button" className="btn btn-secondary mt-5">
                Send!
              </button>
            </div>
          </form>
          <h6>This is a private Message</h6>
          <p>
            Your personal information, such as email or the data you send in
            message, is private and will not be disclosed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormEmail;
