import React from "React";

const FormEmail = () => {
  return (
    <div className="p-5 bg-dark">
      <div className="container">
        <div className="h-100 p-5 bg-light border rounded-3">
          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <span className="input-group-text">Email</span>
            </div>
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text">Message</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <button type="button" className="btn btn-secondary mt-5">
                Send!
              </button>
            </div>
          </form>
          <h6>This is a private Message</h6>
          <p>
            Your personal information such as email or data that you send in the
            mesanjes are private and will not be disclosed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormEmail;
