import React from "react";
import "./css/experience.css";
import server from "../img/server.png";

//icon
import { Icon, InlineIcon } from "@iconify/react";
import nginxIcon from "@iconify-icons/logos/nginx";
import linuxTux from "@iconify-icons/logos/linux-tux";
import awsIcon from "@iconify-icons/logos/aws";
import dataEncryption from "@iconify-icons/flat-color-icons/data-encryption";
import dataConfiguration from "@iconify-icons/flat-color-icons/data-configuration";

//

const Experience = () => {
  return (
    <div>
      <div className="position-relative container ">
        <div className="shadow overflow-hidden p-5 mt-5 text-center bg-light">
          <div className="col-md-10  mx-auto my-5 palante">
            <h1 className="mt-3 display-6 fw-bold text-dark">
              <span className="text-primary">&lt;Server /&gt;</span>{" "}
              configuration for this example!
            </h1>

            <div className="p-3 mt-3 row align-items-center">
              <div className="col">
                <Icon icon={awsIcon} width="50" height="50" />
                <p>
                  I also have experience in Heroku, BlueHost, GoDaddy, Ionos.
                </p>
              </div>
              <div className="col">
                <Icon icon={nginxIcon} width="50" height="50" />
                <p>
                  I also have experience in Heroku, BlueHost, GoDaddy, Ionos.
                </p>
              </div>
              <div className="col">
                <Icon icon={linuxTux} width="50" height="50" />
                <p>
                  I also have experience in Heroku, BlueHost, GoDaddy, Ionos.
                </p>
              </div>
              <div className="col">
                <Icon icon={dataEncryption} width="50" height="50" />
                <p>
                  I also have experience in Heroku, BlueHost, GoDaddy, Ionos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img className="product-device d-none d-md-block" src={server}></img>
      </div>
      <div className="position-relative container ">
        <div className="shadow overflow-hidden p-5 mt-5 text-center bg-light">
          <div className="col-md-10  mx-auto my-5 palante">
            <h1 className="display-4 fw-normal palante">
              <Icon icon={dataConfiguration} width="50" height="50" />
              Punny headline
            </h1>
            <p className="lead fw-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <a className="btn btn-outline-secondary" href="#">
              Coming soon
            </a>
          </div>
        </div>

        <img className="product-device d-none d-md-block" src={server}></img>
      </div>
    </div>
  );
};

export default Experience;
