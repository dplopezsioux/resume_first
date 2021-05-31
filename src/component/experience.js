import React from "react";
import "./css/experience.css";
import server from "../img/server.png";

import * as Icon from "react-bootstrap-icons";

const Experience = () => {
  return (
    <div className="position-relative container ">
      <div className="shadow overflow-hidden p-5 mt-5 text-center bg-light">
        <div className="col-md-10  mx-auto my-5 palante">
          <h1 className="mt-3 display-6 fw-bold text-dark">
            The server configuration for this example!
          </h1>

          <div class="p-3 mt-3 row align-items-center">
            <div class="col">
              <p>I also have experience in Heroku, BlueHost, GoDaddy, Ionos.</p>
              <img
                className="mx-500"
                src="https://www.nginx.com/wp-content/uploads/2021/05/NGINX-Service-Mesh-vertical-white-type.svg"
              ></img>
            </div>
            <div class="col">
              <p>I also have experience in Heroku, BlueHost, GoDaddy, Ionos.</p>
              <img src="https://api.iconify.design/logos-aws-ec2.svg"></img>
            </div>
            <div class="col">
              <p>I also have experience in Heroku, BlueHost, GoDaddy, Ionos.</p>
              <img src="https://www.nginx.com/wp-content/uploads/2021/05/NGINX-Service-Mesh-vertical-white-type.svg"></img>
            </div>
            <div class="col">
              <p>I also have experience in Heroku, BlueHost, GoDaddy, Ionos.</p>
              <img src="https://www.nginx.com/wp-content/uploads/2021/05/NGINX-Service-Mesh-vertical-white-type.svg"></img>
            </div>
            <div class="col">
              <p>I also have experience in Heroku, BlueHost, GoDaddy, Ionos.</p>
              <img src="https://www.nginx.com/wp-content/uploads/2021/05/NGINX-Service-Mesh-vertical-white-type.svg"></img>
            </div>
            <div class="col">
              <p>I also have experience in Heroku, BlueHost, GoDaddy, Ionos.</p>
              <img src="https://www.nginx.com/wp-content/uploads/2021/05/NGINX-Service-Mesh-vertical-white-type.svg"></img>
            </div>
          </div>

          <h1 className="display-4 fw-normal palante">Punny headline</h1>
          <p className="lead fw-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <a className="btn btn-outline-secondary" href="#">
            Coming soon
          </a>
        </div>
      </div>

      <img className="product-device d-none d-md-block" src={server}></img>
    </div>
  );
};

export default Experience;
