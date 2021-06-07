import React from "react";
import PropTypes from "prop-types";

const dataTest = {
  tecnologies: [
    {
      name: "nodejs",
      type: "Tecnologies",
      url: "https://nodejs.org/en/",
      descrip:
        "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    },
    {
      name: "mySQL",
      type: "Tecnologies",
      url: "https://www.mysql.com/",
      descrip: " 2021, Oracle Corporation and/or its affiliates",
    },
    {
      name: "mongoDb",
      type: "Tecnologies",
      url: "https://www.mongodb.com/",
      descrip:
        "mongoDB is a general purpose, document-based, distributed database built for modern application developers",
    },
  ],
  languages: [
    {
      name: "Javascript",
      type: "languages",
      url: "https://www.javascript.com/",
      descrip:
        "JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.",
    },
    {
      name: "Typescript",
      type: "languages",
      url: "https://www.javascript.com/",
      descrip:
        "JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.",
    },
    {
      name: "C#",
      type: "languages",
      url: "https://www.javascript.com/",
      descrip:
        "JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.",
    },
    {
      name: "C++",
      type: "languages",
      url: "https://www.javascript.com/",
      descrip:
        "JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.",
    },
  ],
  tools: [
    {
      name: "Github",
      type: "Tools",
      url: "https://www.javascript.com/",
      descrip:
        "JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.",
    },
    {
      name: "mongoDb",
      type: "Tools",
      url: "https://www.javascript.com/",
      descrip:
        "JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.",
    },
    {
      name: "MySql",
      type: "Tools",
      url: "https://www.javascript.com/",
      descrip:
        "JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.",
    },
    {
      name: "SqlServer",
      type: "Tools",
      url: "https://www.javascript.com/",
      descrip:
        "JavaScript.com is a resource built by the Pluralsight team for the JavaScript community.",
    },
  ],
};

//programacion
// npm install --save-dev @iconify/react @iconify-icons/ion
import { Icon } from "@iconify/react";

import settingsSharp from "@iconify-icons/ion/settings-sharp";

class Listskill extends React.Component {
  render() {
    const listas = this.props.list;
    const color = this.props.gcolor;
    console.log(listas);

    return (
      <div>
        {listas.map((a) => {
          return (
            <div key={Math.random() * 10000} className="d-flex text-muted pt-3">
              <svg
                className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                width="32"
                height="32"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 32x32"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>a.name</title>
                <rect width="100%" height="100%" fill={color}></rect>
                <text x="50%" y="50%" fill="#007bff" dy=".3em"></text>
              </svg>

              <div className="pb-3 mb-0 small lh-sm  w-100">
                <div className="d-flex justify-content-between">
                  <strong className="text-gray-dark">{a.name}</strong>
                  <a target="_blank" href={a.url}>
                    got to ...
                  </a>
                </div>
                <span className="d-block">{a.descrip}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

class TablaSkill extends React.Component {
  static propTypes = {
    dataskill: PropTypes.object.isRequired,
  };

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    const names = Object.keys(this.props.dataskill);
    const props = this.props.dataskill;

    console.log(props);
    return (
      <div className="my-3 p-3 bg-light rounded shadow-sm">
        {names.map((keyname) => {
          return (
            <div key={Math.random() * 10000}>
              <h6 className="border-bottom pb-2 mb-0 text-uppercase">
                {keyname}
              </h6>

              <Listskill list={props[keyname]} gcolor={this.getRandomColor()} />
            </div>
          );
        })}
      </div>
    );
  }
}

class Skill extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-white p-3 mt-5 mb-3">
          <div className="container ">
            <header className="pb-3 mt-5 mb-4 border-bottom">
              <Icon icon={settingsSharp} width="50" height="50" />
              <span className="fs-4">Skills and Tools</span>
            </header>

            <div>
              <TablaSkill dataskill={dataTest} key={Math.random() * 10000} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
