import React, { Component, Fragment } from "react";
import { YoutubeComp } from "../../components/YoutubeComponent/YoutubeComp";

export class Home extends Component {
  render() {
    const data = [
      {
        time: "19.14",
        title: "How to pro Golang in 5 minuttes",
        desc: "This video show",
      },
      {
        time: "01.15",
        title: "Funny Video 2021",
        desc: "LOL! Watch your video if you in",
      },
      {
        time: "10.41",
        title: "Mobile Legend Live",
        desc: "Just watch and enjoy the stream :)",
      },
    ];
    return (
      // jika menggunakan lebih dari 1 parent menggunakan React Fragment
      <Fragment>
        <div>
          <p>Youtube Component</p>
          <hr />
          <div>
            {data.map((a) => (
              <YoutubeComp time={a.time} title={a.title} desc={a.desc} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
