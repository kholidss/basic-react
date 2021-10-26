import React from "react";
import "./YoutubeComp.css";

export const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://i.pinimg.com/originals/a0/96/d3/a096d33f7384ab1c3dd8e5d9a00f4159.jpg"
          alt=""
        />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "00.00",
};
