/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";

//component
import Resume from "./component/resume";
import Experience from "./component/experience";
import Skill from "./component/skill";
import Description from "./component/description";
import Relate from "./component/relate";
import FormEmail from "./component/formEmail";

//css
import "bootstrap/dist/css/bootstrap.min.css";

//start
class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <div>
            <Resume />
            <Relate />
            <Experience />

            <Description />
            <Skill />
            <FormEmail />
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <App title="This is a react APP" />,
  document.getElementById("root")
);
