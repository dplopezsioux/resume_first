/* eslint-disable react/prop-types */
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Resume from "./component/resume";
import Experience from "./component/experience";
import Skill from "./component/skill";
import Description from "./component/description";
import Relate from "./component/relate";

//css
import "bootstrap/dist/css/bootstrap.min.css";

import avatar from "./img/avatar.png";

const testData = [
  {
    name: "Daniel",
    avatar_url: avatar,
  },
  {
    name: "Jany",
    avatar_url:
      "https://media-exp1.licdn.com/dms/image/C4E03AQFJMQ5lXknj2Q/profile-displayphoto-shrink_400_400/0/1615056187851?e=1627516800&v=beta&t=D0VzpxpZUBbnD90JCQCiP7H21tFHKpimcjMSU4AdEME",
  },
  {
    name: "Kyle Simpson",
    avatar_url:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGcaIsZZIPvxg/profile-displayphoto-shrink_400_400/0/1552016979284?e=1627516800&v=beta&t=AahevBsjjmZmToYXNIys3zaLyuljOwqcbZNSFsxVaJc",
  },
];

const CardList = (props) => (
  <div>
    {props.profile.map((profile) => (
      <Card {...profile} key={profile.id} />
    ))}
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div>
        <img src={profile.avatar_url}></img>
        <h2>{profile.name}</h2>
      </div>
    );
  }
}
///////////////////////////
class Form extends React.Component {
  state = { userName: "" };

  handlerSubmit = async (event) => {
    event.preventDefault();

    const resp = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
  };
  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
        <button>add a new card</button>
      </form>
    );
  }
}

//////////////////////////////
class App extends React.Component {
  state = {
    profiles: testData,
    showBtn: true,
  };

  addNewProfile = (profileData) => {
    console.log("app", profileData);
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  stadoBtn = () => {
    this.setState((prevState) => ({
      showBtn: !prevState.showBtn,
    }));
    console.log(this.state.showBtn);
  };

  render() {
    return (
      <>
        <div>
          <div>
            <Resume />
            <Experience />
            <Relate />
            <Description />
            <Skill />
          </div>

          <button onClick={this.stadoBtn}>Show</button>
          <div>
            <div>
              <h1>{this.props.title}</h1>
            </div>
            <Form onSubmit={this.addNewProfile} />
            {this.state.showBtn ? (
              <CardList profile={this.state.profiles} />
            ) : (
              <h3>Hide</h3>
            )}
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
